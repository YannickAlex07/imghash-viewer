import { FunctionComponent, useState } from 'react'
import Back from '../components/Back'
import BottomBar from '../components/BottomBar'
import HashForm, { HashFormData } from './components/HashForm'
import { invoke } from '@tauri-apps/api'
import { Matrix } from '../models/matrix'
import Spinner from '../components/Spinner'
import MatrixView from './components/MatrixView'

enum State {
  Default,
  Loading,
  Matrix,
}

const Hash: FunctionComponent = () => {
  const [state, setState] = useState(State.Default)
  const [matrix, setMatrix] = useState<Matrix | null>(null)

  const onSubmit = (data: HashFormData) => {
    // show loading spinner
    setState(State.Loading)

    invoke('decode_hash', {
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
        console.log(error)
        // hide loading spinner, show error toast and
        // show form again
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
      {state === State.Matrix && (
        <MatrixView matrix={matrix!} onClear={onClear} />
      )}
    </div>
  )
}

export default Hash
