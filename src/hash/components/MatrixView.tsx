import { FunctionComponent } from 'react'
import { Matrix } from '../../models/matrix'

export type MatrixViewProps = {
  matrix: Matrix
  onClear: () => void
}

const MatrixView: FunctionComponent<MatrixViewProps> = ({
  matrix,
  onClear,
}) => {
  const matrixRows = []
  for (const row of matrix) {
    const els = []

    for (const el of row) {
      const color = el ? 'bg-primary' : 'bg-base-200'
      els.push(<div className={`w-10 h-10 ${color}`}></div>)
    }

    matrixRows.push(<div className="flex gap-2">{els}</div>)
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-col gap-2 rounded-xl overflow-hidden">
          {matrixRows}
        </div>
        <div>
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
      </div>
    </div>
  )
}

export default MatrixView
