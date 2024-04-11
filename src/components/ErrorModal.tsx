import { FunctionComponent } from 'react'

export type ErrorModalProps = {
  id: string
  error: string
}

const ErrorModal: FunctionComponent<ErrorModalProps> = ({ id, error }) => {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box">
        <div className="flex flex-col gap-2">
          <p className="text-xl font-extrabold">Something Went Wrong</p>
          <p className="text-lg">{error}</p>
        </div>

        {/* Actions */}
        <div className="modal-action">
          <form method="dialog">
            <button className="btn">Close</button>
          </form>
        </div>
      </div>
    </dialog>
  )
}

export default ErrorModal
