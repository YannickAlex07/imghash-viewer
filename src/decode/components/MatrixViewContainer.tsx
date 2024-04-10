import { FunctionComponent } from 'react'
import { Matrix } from '../../models/matrix'
import MatrixView from '../../components/MatrixView'

export type MatrixViewContainerProps = {
  matrix: Matrix
  onClear: () => void
}

const MatrixViewContainer: FunctionComponent<MatrixViewContainerProps> = ({ matrix, onClear }) => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 items-center">
        <MatrixView matrix={matrix} />
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

export default MatrixViewContainer
