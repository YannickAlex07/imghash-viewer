use imghash::ImageHash;

#[tauri::command]
pub async fn decode(hash: &str, width: usize, height: usize) -> Result<Vec<Vec<bool>>, String> {
    let img_hash = ImageHash::decode(hash, width, height);
    
    if img_hash.is_err() {
        return Err("Failed to decode hash".to_string());
    }

    Ok(img_hash.unwrap().matrix)
}