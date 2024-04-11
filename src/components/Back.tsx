import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import LeftArrowIcon from '../icons/LeftArrowIcon'

export type BackProps = {
  showConfirmation: boolean
}

const Back: FunctionComponent<BackProps> = ({ showConfirmation }) => {
  const navigate = useNavigate()

  const onClick = () => {
    console.log('clicked back button')
    console.log('showConfirmation:', showConfirmation)

    if (showConfirmation) {
      const modal = document.getElementById('confirmDialog')

      // if we can't find the modal, we should just reroute
      if (modal) {
        const dialog = modal as HTMLDialogElement
        dialog.showModal()
        return
      } else {
        console.log('modal not found')
      }
    }

    navigate('/')
  }

  return (
    <div>
      {/* Back Button */}
      <button className="btn" onClick={onClick}>
        <LeftArrowIcon />
        Back
      </button>

      {/* Modal */}
      <dialog id="confirmDialog" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Are you sure you want to go back?</h3>
          <p className="pt-4">If you go back, the current state will be discarded.</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary text-white mr-2" onClick={() => navigate('/')}>
                Confirm
              </button>

              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  )
}

export default Back
