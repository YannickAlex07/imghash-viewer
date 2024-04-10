import { FunctionComponent } from 'react'
import { Matrix } from '../models/matrix'

export enum MatrixViewSize {
  Small = 2,
  Default = 10,
}

export type MatrixViewProps = {
  matrix: Matrix
  size?: MatrixViewSize
}

const MatrixView: FunctionComponent<MatrixViewProps> = ({
  matrix,
  size = MatrixViewSize.Default,
}) => {
  let widthAndHeight = 'w-10 h-10'
  let gap = 'gap-2'
  let rounded = 'rounded-xl'

  if (size === MatrixViewSize.Small) {
    widthAndHeight = 'w-2 h-2'
    gap = 'gap-1'
    rounded = 'rounded-sm'
  }

  const matrixRows = []
  for (const row of matrix) {
    const els = []

    for (const el of row) {
      const color = el ? 'bg-primary' : 'bg-base-200'
      els.push(<div className={`${widthAndHeight} ${color}`}></div>)
    }

    matrixRows.push(<div className={`flex ${gap}`}>{els}</div>)
  }

  return <div className={`flex flex-col ${gap} ${rounded} overflow-hidden`}>{matrixRows}</div>
}

export default MatrixView
