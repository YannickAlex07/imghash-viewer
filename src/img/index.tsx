import { open } from '@tauri-apps/api/dialog';

function Img() {

  const openImagePicker = async () => {
    const result = await open({
      multiple: false,
      directory: false,
    });
    console.log(result);
  };

  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <div className="flex flex-col items-center space-y-2">
        <div className='flex items-center flex-col'>
          <button className='btn btn-primary' onClick={async () => await openImagePicker()}>Select Image</button>
        </div>
        <p>or</p>
        <div>
          <input type="text" placeholder="Enter Hash" className="input input-bordered w-full max-w-xs" />
        </div>
      </div>
    </div>
  );
}

export default Img;
