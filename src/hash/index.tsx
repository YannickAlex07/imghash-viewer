import Back from "../components/Back";
import BottomBar from "../components/BottomBar";

function Hash() {
  return (
    <div>
      <BottomBar />
      
      { /* Header */ }
      <div className="absolute top-0 z-10">
        <div className="flex justify-between items-center m-4">
          <Back />
          <button className="btn hidden" disabled={true}>Clear</button>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        {  /* Text */ }
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-4xl font-extrabold">Hash Converter</h1>
          <p className="text-center max-w-md">Converts a hash to its corresponding bit matrix and visualize it. Use it to understand what a hash actually encodes.</p>
        </div>

        { /* Form */ }
        <form action="" className="flex justify-center mt-6">
          <div className="flex-col gap-y-3 form-control items-center">

            { /* Hash */ }
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Hex-Encoded Hash</span>
              </div>
              <input type="text" className="input input-bordered w-full" placeholder="Hash" />
            </div>

            { /* Size */ }
            <div className="flex gap-3 max-w-sm items-end">
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Width</span>
                </div>
                <input type="number" className="input input-bordered w-full" placeholder="X" defaultValue={8} />
              </div>

              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Height</span>
                </div>
                <input type="number" className="input input-bordered w-full" placeholder="Y" defaultValue={8} />
              </div>
              
              <div className="tooltip tooltip-right" data-tip="XXXXXXXX">
                <div className="btn btn-square no-animation text-primary pointer-events-none">
                  <svg className="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
                  </svg>
                </div>
              </div>
            </div>

            { /* Button */ }
            <button className="btn btn-primary w-full" disabled={false}>Convert</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Hash;
