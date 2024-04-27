// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

mod decode;
mod hash;

use decode::decode;
use hash::hash_image;

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![decode, hash_image])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
