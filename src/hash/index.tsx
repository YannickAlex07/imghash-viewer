import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Back from '../components/Back'
import BottomBar from '../components/BottomBar'
import Spinner from '../components/Spinner'
import SelectImage from './components/SelectImage'
import { HashResult } from '../models/hash_result'
import HashResultView from './components/HashResultView'
import { HashType } from '../models/hash_type'

enum State {
  Default,
  Loading,
  Result,
}

const HashPage: FunctionComponent = () => {
  const [state, setState] = useState(State.Default)
  const [result, setResult] = useState<HashResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSelected = (path: string, hashTypes: Set<HashType>) => {
    console.log(path)

    // show loading spinner
    setState(State.Loading)

    // call rust backend to hash the image
    invoke('hash_image', {
      path: path,
      hashTypes: Array.from(hashTypes.keys()),
    })
      .then((response) => {
        // validate the summary
        console.log(response)
        const result: HashResult = HashResult.parse(response)

        setResult(result)
        setState(State.Result)
      })
      .catch((error) => {
        setError(error as string)
        setState(State.Default)

        const modal = document.getElementById('errorDialog')

        if (modal) {
          const dialog = modal as HTMLDialogElement
          dialog.showModal()
        }
      })
  }

  const onClear = () => {
    setState(State.Default)
    setResult(null)
  }

  return (
    <div>
      <BottomBar />

      {/* Header */}
      <div className="absolute top-0 z-10">
        <div className="flex justify-between items-center m-4">
          <Back showConfirmation={result !== null} />
        </div>
      </div>

      {/* Select Image */}
      {state === State.Default && <SelectImage onSelected={onSelected} />}

      {/* Loading spinner */}
      {state === State.Loading && <Spinner />}

      {/* Summary */}
      {state === State.Result && <HashResultView onClear={onClear} result={result!} />}

      {/* Error Modal */}
      <dialog id="errorDialog" className="modal">
        <div className="modal-box">
          <div className="flex flex-col gap-2">
            <p className="text-xl font-extrabold">Something Went Wrong</p>
            <p className="text-lg">{error}</p>
          </div>

          {/* Actions */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default HashPage
