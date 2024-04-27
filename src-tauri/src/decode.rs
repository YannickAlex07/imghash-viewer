use imghash::ImageHash;

#[tauri::command]
pub async fn decode(hash: &str, width: usize, height: usize) -> Result<Vec<Vec<bool>>, String> {
    match ImageHash::decode(hash, width, height) {
        Ok(hash) => Ok(hash.matrix),
        Err(err) => Err(err),
    }
}
