import { useNavigate } from 'react-router-dom'
import BottomBar from './components/BottomBar'
import { FunctionComponent } from 'react'

const Home: FunctionComponent = () => {
  const navigate = useNavigate()

  return (
    <div>
      <BottomBar />
      <div className="w-screen h-screen flex flex-col justify-center items-center gap-10">
        <p className="font-bold text-xl">What would you like to do?</p>
        <div className="flex gap-6">
          <button className="btn w-72 h-72" onClick={() => navigate('/hash/')}>
            To Hash
          </button>
          <div className="divider divider-horizontal">OR</div>
          <button className="btn w-72 h-72">To Image</button>
        </div>
      </div>
    </div>
  )
}

export default Home
