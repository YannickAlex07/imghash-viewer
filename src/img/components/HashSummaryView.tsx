import { FunctionComponent } from 'react'
import { HashSummary } from '../../models/summary'
import MatrixView, { MatrixViewSize } from '../../components/MatrixView'

export type HashSummaryViewProps = {
  title: string
  summary: HashSummary
}

const HashSummaryView: FunctionComponent<HashSummaryViewProps> = ({
  title,
  summary,
}) => {
  return (
    <div className="flex gap-5 items-center">
      <MatrixView size={MatrixViewSize.Small} matrix={summary.matrix} />
      <div className="flex flex-col gap-1">
        <p className="text-base italic">{title}</p>
        <p className="font-bold">{summary.hash.toUpperCase()}</p>
      </div>
    </div>
  )
}

export default HashSummaryView
