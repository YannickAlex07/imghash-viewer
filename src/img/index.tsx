import { open } from '@tauri-apps/api/dialog'
import { FunctionComponent } from 'react'

const Img: FunctionComponent = () => {
  const openImagePicker = async () => {
    const result = await open({
      multiple: false,
      directory: false,
    })
    console.log(result)
  }

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex items-center flex-col">
          <button
            className="btn btn-primary"
            onClick={() => {
              void (async () => {
                await openImagePicker()
              })()
            }}
          >
            Select Image
          </button>
        </div>
        <p>or</p>
        <div>
          <input
            type="text"
            placeholder="Enter Hash"
            className="input input-bordered w-full max-w-xs"
          />
        </div>
      </div>
    </div>
  )
}

export default Img
