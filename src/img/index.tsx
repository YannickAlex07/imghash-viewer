import { FunctionComponent, useState } from 'react'
import BottomBar from '../components/BottomBar'
import Back from '../components/Back'
import SelectImage from './components/SelectImage'
import Spinner from '../components/Spinner'

enum State {
  Default,
  Loading,
  Summary,
}

const ImagePage: FunctionComponent = () => {
  const [state, setState] = useState(State.Default)

  const onSelected = (path: string) => {
    console.log(path)

    // show loading spinner
    setState(State.Loading)

    // call rust backend to hash the image

    // show the summary
  }

  return (
    <div>
      <BottomBar />

      {/* Header */}
      <div className="absolute top-0 z-10">
        <div className="flex justify-between items-center m-4">
          <Back showConfirmation={false} />
        </div>
      </div>

      {/* Select Image */}
      {state === State.Default && <SelectImage onSelected={onSelected} />}

      {/* Loading spinner */}
      {state === State.Loading && <Spinner />}
    </div>
  )
}

export default ImagePage
