
use std::path::Path;

use imghash::{average::AverageHasher, difference::DifferenceHasher, perceptual::PerceptualHasher, ImageHasher};
use serde::Serialize;

// HASH SUMMARYØ
#[derive(Debug, Serialize)]
pub struct HashSummary {
    pub matrix: Vec<Vec<bool>>,
    pub hash: String
}

impl HashSummary {
    pub fn new(path: &str, hasher: Box<dyn ImageHasher>) -> Result<HashSummary, String> {
        let res = hasher.hash_from_path(Path::new(path));

        match res {
            Ok(hash) => Ok(HashSummary {
                matrix: hash.matrix.clone(),
                hash: hash.python_safe_encode(),
            }),
            Err(e) => Err(e.to_string())
        }
    }
}

// IMAGE SUMMARY
#[derive(Debug, Serialize)]
pub struct ImageSummary {
    pub path: String,
    pub ahash: HashSummary,
    pub dhash: HashSummary,
    pub phash: HashSummary,
}

impl ImageSummary {
    pub fn new(path: &str) -> Result<ImageSummary, String> {
        let ahash = HashSummary::new(path, Box::new(AverageHasher { ..Default::default() }));
        let dhash = HashSummary::new(path, Box::new(DifferenceHasher { ..Default::default() }));
        let phash = HashSummary::new(path, Box::new(PerceptualHasher { ..Default::default() }));

        if ahash.is_err() || dhash.is_err() || phash.is_err() {
            return Err("Failed to hash image".to_string());
        }

        Ok(ImageSummary {
            path: path.to_string(),
            ahash: ahash.unwrap(),
            dhash: dhash.unwrap(),
            phash: phash.unwrap(),
        })
    }
}
