import Back from '../components/Back'
import BottomBar from '../components/BottomBar'
import HashForm from '../components/HashForm'

function Hash() {
  return (
    <div>
      <BottomBar />

      {/* Header */}
      <div className="absolute top-0 z-10">
        <div className="flex justify-between items-center m-4">
          <Back />
          <button className="btn hidden" disabled={true}>
            Clear
          </button>
        </div>
      </div>
      <div className="h-screen flex flex-col justify-center items-center">
        {/* Text */}
        <div className="flex flex-col items-center gap-y-2">
          <h1 className="text-4xl font-extrabold">Hash Converter</h1>
          <p className="text-center max-w-md">
            Converts a hash to its corresponding bit matrix and visualizes it in
            black and white.
          </p>
        </div>

        {/* Form */}
        <HashForm />
      </div>
    </div>
  )
}

export default Hash
