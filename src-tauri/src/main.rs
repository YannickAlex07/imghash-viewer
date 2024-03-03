// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::path::Path;

use imghash::ImageHash;
use summary::ImageSummary;

mod summary;

#[tauri::command]
async fn decode_hash(hash: &str, width: usize, height: usize) -> Result<Vec<Vec<bool>>, String> {
    let img_hash = ImageHash::python_safe_decode(hash, width, height);
    
    if img_hash.is_none() {
        return Err("Failed to decode hash".to_string());
    }

    Ok(img_hash.unwrap().matrix)
}

#[tauri::command]
async fn hash_image(path: &str) -> Result<ImageSummary, String> {
    // check if path exists
    let file_path = Path::new(path);
    match file_path.try_exists() {
        Ok(exists) => {
            if !exists {
                return Err("File does not exist".to_string());
            }
        },
        Err(e) => {
            return Err(e.to_string());
        }
    }

    ImageSummary::new(path)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![decode_hash, hash_image])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
