import { invoke } from '@tauri-apps/api'
import { FunctionComponent, useState } from 'react'
import Back from '../components/Back'
import BottomBar from '../components/BottomBar'
import Spinner from '../components/Spinner'
import SelectImage from './components/SelectImage'
import { ImageSummary } from '../models/summary'
import ImageSummaryView from './components/ImageSummaryView'

enum State {
  Default,
  Loading,
  Summary,
}

const ImagePage: FunctionComponent = () => {
  const [state, setState] = useState(State.Default)
  const [summary, setSummary] = useState<ImageSummary | null>(null)

  const onSelected = (path: string) => {
    console.log(path)

    // show loading spinner
    setState(State.Loading)

    // call rust backend to hash the image
    invoke('hash_image', {
      path: path,
    })
      .then((response) => {
        // validate the summary
        const summary: ImageSummary = ImageSummary.parse(response)

        setSummary(summary)
        setState(State.Summary)
      })
      .catch((error) => {
        console.log(error)
        // show error toast
        setState(State.Default)
      })

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

      {/* Summary */}
      {state === State.Summary && <ImageSummaryView summary={summary!} />}
    </div>
  )
}

export default ImagePage
