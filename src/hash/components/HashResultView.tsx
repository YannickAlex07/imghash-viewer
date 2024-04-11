import { convertFileSrc } from '@tauri-apps/api/tauri'
import { FunctionComponent } from 'react'
import XIcon from '../../icons/XIcon'
import { HashResult } from '../../models/hash_result'
import { HashTypeToName } from '../../models/hash_type'
import HashView from './HashView'

export type HashResultViewProps = {
  result: HashResult
  onClear: () => void
}

const HashResultView: FunctionComponent<HashResultViewProps> = ({ result, onClear }) => {
  const imgUrl = convertFileSrc(result.path)

  return (
    <div className="h-screen w-screen flex flex-col gap-10 items-center justify-center">
      <div className="flex items-center justify-center gap-12">
        {/* Preview Image */}
        <div className="max-w-96 max-h-96 flex flex-col justify-center">
          <img src={imgUrl} className="rounded-lg max-w-full max-h-96" />
        </div>

        {/* Hashes */}
        <div className="flex flex-col gap-5">
          {result.hashes
            .sort((a, b) => a.hashType.valueOf() - b.hashType.valueOf()) // ensure that the order is always the same
            .map((hash) => (
              <HashView
                key={HashTypeToName[hash.hashType]}
                title={HashTypeToName[hash.hashType]}
                hash={hash}
              />
            ))}
        </div>
      </div>

      {/* Clear Button */}
      <button className="btn" onClick={onClear}>
        <XIcon />
        Clear
      </button>
    </div>
  )
}

export default HashResultView
