// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use imghash::ImageHash;

#[tauri::command]
fn decode_hash(hash: &str, width: usize, height: usize) -> Result<Vec<Vec<bool>>, String> {
    let img_hash = ImageHash::python_safe_decode(hash, width, height);
    
    if img_hash.is_none() {
        return Err("Failed to decode hash".to_string());
    }

    Ok(img_hash.unwrap().matrix)
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![decode_hash])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
