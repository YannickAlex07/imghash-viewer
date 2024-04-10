import { FunctionComponent } from 'react'
import { ImageSummary } from '../../models/summary'
import HashSummaryView from './HashSummaryView'
import { convertFileSrc } from '@tauri-apps/api/tauri'

export type ImageSummaryViewProps = {
  summary: ImageSummary
  onClear: () => void
}

const ImageSummaryView: FunctionComponent<ImageSummaryViewProps> = ({ summary, onClear }) => {
  const imgUrl = convertFileSrc(summary.path)

  return (
    <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center justify-center gap-12">
        {/* Preview Image */}
        <div className="max-w-96 max-h-96 flex flex-col justify-center">
          <img src={imgUrl} className="rounded-lg max-w-full max-h-96" />
        </div>

        {/* Hashes */}
        <div className="flex flex-col gap-4">
          <HashSummaryView title="Average Hash" summary={summary.ahash} />
          <HashSummaryView title="Difference Hash" summary={summary.dhash} />
          <HashSummaryView title="Perceptual hash" summary={summary.phash} />
        </div>
      </div>

      {/* Clear Button */}
      <button className="btn" onClick={onClear}>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18 18 6m0 12L6 6"
          />
        </svg>
        Clear
      </button>
    </div>
  )
}

export default ImageSummaryView
