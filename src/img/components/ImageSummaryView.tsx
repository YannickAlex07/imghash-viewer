import { FunctionComponent } from 'react'
import { ImageSummary } from '../../models/summary'
import HashSummaryView from './HashSummaryView'
import { convertFileSrc } from '@tauri-apps/api/tauri'

export type ImageSummaryViewProps = {
  summary: ImageSummary
}

const ImageSummaryView: FunctionComponent<ImageSummaryViewProps> = ({
  summary,
}) => {
  const imgUrl = convertFileSrc(summary.path)

  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center gap-12">
      <img src={imgUrl} className="max-w-72 max-h-72 rounded-lg" />
      <div className="flex gap-12">
        <HashSummaryView title="Average Hash" summary={summary.ahash} />
        <HashSummaryView title="Difference Hash" summary={summary.dhash} />
        <HashSummaryView title="Perceptual hash" summary={summary.phash} />
      </div>
    </div>
  )
}

export default ImageSummaryView
