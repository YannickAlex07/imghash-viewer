import { FunctionComponent } from 'react'

const Spinner: FunctionComponent = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <span className="loading loading-spinner"></span>
    </div>
  )
}

export default Spinner
