import { FunctionComponent } from 'react'
import { Matrix } from '../models/matrix'

export type MatrixViewProps = {
  matrix: Matrix
  size?: number
  gap?: number
}

const MatrixView: FunctionComponent<MatrixViewProps> = ({
  matrix,
  size = 10,
  gap = 2,
}) => {
  const matrixRows = []
  for (const row of matrix) {
    const els = []

    for (const el of row) {
      const color = el ? 'bg-primary' : 'bg-base-200'
      els.push(<div className={`w-${size} h-${size} ${color}`}></div>)
    }

    matrixRows.push(<div className={`flex gap-${gap}`}>{els}</div>)
  }

  return (
    <div className={`flex flex-col gap-${gap} rounded-xl overflow-hidden`}>
      {matrixRows}
    </div>
  )
}

export default MatrixView
