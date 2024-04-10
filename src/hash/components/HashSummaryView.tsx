import { FunctionComponent } from 'react'
import { HashSummary } from '../../models/summary'
import MatrixView from '../../components/MatrixView'

export type HashSummaryViewProps = {
  title: string
  summary: HashSummary
}

const HashSummaryView: FunctionComponent<HashSummaryViewProps> = ({ title, summary }) => {
  const dialogId = `matrixDialog-${title.replace(' ', '')}`

  const showMatrix = () => {
    const modal = document.getElementById(dialogId)

    // if we can't find the modal, we should just reroute
    if (modal) {
      const dialog = modal as HTMLDialogElement
      dialog.showModal()
    }
  }

  return (
    <div>
      {/* Button */}
      <div className="flex gap-5 items-center bg-base-200 py-3 px-8 rounded-xl">
        <div className="flex flex-col gap-1 w-56">
          <p className="text-base">{title}</p>
          <p className="font-bold">{summary.hash.toUpperCase()}</p>
        </div>
        <button className="btn btn-primary text-white" onClick={showMatrix}>
          Open Matrix
        </button>
      </div>

      {/* Modal */}
      <dialog id={`${dialogId}`} className="modal">
        <div className="modal-box">
          <div className="flex w-full justify-center px-10 py-5">
            <div className="flex flex-col items-center gap-6">
              <div className="flex flex-col items-center gap-2">
                <p className="text-lg">{title}</p>
                <p className="text-xl font-bold">{summary.hash.toUpperCase()}</p>
              </div>
              <MatrixView matrix={summary.matrix} />
            </div>
          </div>

          {/* Actions */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default HashSummaryView
