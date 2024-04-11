import { FunctionComponent, useState } from 'react'
import Back from '../components/Back'
import BottomBar from '../components/BottomBar'
import HashForm, { HashFormData } from './components/HashForm'
import { invoke } from '@tauri-apps/api'
import { Matrix } from '../models/matrix'
import Spinner from '../components/Spinner'
import MatrixViewContainer from './components/MatrixViewContainer'
import ErrorModal from '../components/ErrorModal'

enum State {
  Default,
  Loading,
  Matrix,
}

const DecodePage: FunctionComponent = () => {
  const [state, setState] = useState(State.Default)
  const [matrix, setMatrix] = useState<Matrix | null>(null)
  const [error, setError] = useState<string | null>(null)

  const onSubmit = (data: HashFormData) => {
    // show loading spinner
    setState(State.Loading)

    invoke('decode', {
      hash: data.hash,
      width: data.width,
      height: data.height,
    })
      .then((response) => {
        // use zod to validate the response
        const matrix: Matrix = Matrix.parse(response)

        // hide loading spinner and show matrix
        setMatrix(matrix)
        setState(State.Matrix)
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
    setMatrix(null)
  }

  return (
    <div>
      <BottomBar />

      {/* Header */}
      <div className="absolute top-0 z-10">
        <div className="flex justify-between items-center m-4">
          <Back showConfirmation={matrix !== null} />
        </div>
      </div>

      {/* Form */}
      {state === State.Default && <HashForm onSubmit={onSubmit} />}

      {/* Loading spinner */}
      {state === State.Loading && <Spinner />}

      {/* Matrix */}
      {state === State.Matrix && <MatrixViewContainer matrix={matrix!} onClear={onClear} />}

      {/* Error Modal */}
      <ErrorModal id="errorModal" error={error || ''} />
    </div>
  )
}

export default DecodePage
