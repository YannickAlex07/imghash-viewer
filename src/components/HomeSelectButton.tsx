import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'

export type HomeSelectButtonProps = {
  destination: string
  title: string
  description: string
}

const HomeSelectButton: FunctionComponent<HomeSelectButtonProps> = ({
  destination,
  title,
  description,
}) => {
  const navigate = useNavigate()

  return (
    <button className="btn w-72 h-72 p-14" onClick={() => navigate(destination)}>
      <div className="flex flex-col items-center gap-1">
        <span className="text-lg">{title}</span>
        <p className="font-light leading-relaxed">{description}</p>
      </div>
    </button>
  )
}

export default HomeSelectButton
