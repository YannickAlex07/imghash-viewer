import { FunctionComponent } from 'react'
import { HashSummary } from '../../models/summary'
import MatrixView from '../../components/MatrixView'

export type HashSummaryViewProps = {
  title: string
  summary: HashSummary
}

const HashSummaryView: FunctionComponent<HashSummaryViewProps> = ({
  title,
  summary,
}) => {
  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="flex flex-col gap-2 items-center">
        <p className="text-base font-bold">{title}</p>
        <p>{summary.hash}</p>
      </div>
      <MatrixView size={3} gap={1} matrix={summary.matrix} />
    </div>
  )
}

export default HashSummaryView
