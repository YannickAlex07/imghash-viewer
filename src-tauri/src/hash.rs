use imghash::{average_hash, difference_hash, perceptual_hash, ImageHash};
use rayon::prelude::*;
use serde_repr::{Deserialize_repr, Serialize_repr};
use std::path::Path;

use serde::{Deserialize, Serialize};

#[derive(Serialize_repr, Deserialize_repr, Clone)]
#[repr(u8)]
pub enum HashType {
    Average,
    Difference,
    Perceptual,
}

#[derive(Serialize, Deserialize)]
pub struct Hash {
    pub matrix: Vec<Vec<bool>>,
    pub hash: String,

    #[serde(rename(serialize = "hashType"))]
    pub hash_type: HashType,
}

#[derive(Serialize, Deserialize)]
pub struct HashResult {
    pub path: String,
    pub hashes: Vec<Hash>,
}

#[tauri::command]
pub async fn hash_image(path: &str, hash_types: Vec<HashType>) -> Result<HashResult, String> {
    // check if path exists
    let file_path = Path::new(path);
    match file_path.try_exists() {
        Ok(exists) => {
            if !exists {
                return Err("File does not exist".to_string());
            }
        }
        Err(e) => {
            return Err(e.to_string());
        }
    }

    // use rayon to compute hashes in parallel
    let hashes = hash_types
        .into_par_iter()
        .map(|hash_type| {
            let hash: ImageHash;

            match hash_type {
                HashType::Average => match average_hash(file_path) {
                    Ok(h) => hash = h,
                    Err(e) => return Err(e.to_string()),
                },
                HashType::Difference => match difference_hash(file_path) {
                    Ok(h) => hash = h,
                    Err(e) => return Err(e.to_string()),
                },
                HashType::Perceptual => match perceptual_hash(file_path) {
                    Ok(h) => hash = h,
                    Err(e) => return Err(e.to_string()),
                },
            }

            Ok(Hash {
                hash_type,
                hash: hash.encode(),
                matrix: hash.matrix,
            })
        })
        .collect::<Result<Vec<Hash>, String>>();

    match hashes {
        Ok(h) => Ok(HashResult {
            path: path.to_string(),
            hashes: h,
        }),
        Err(s) => Err(s),
    }
}
