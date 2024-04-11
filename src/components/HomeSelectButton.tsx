import { FunctionComponent } from 'react'
import { useNavigate } from 'react-router-dom'
import BrainIcon from '../icons/BrainIcon'
import ImageFileIcon from '../icons/ImageFileIcon'

export enum HomeButtonIcon {
  Brain = 1,
  File = 2,
}

export type HomeSelectButtonProps = {
  destination: string
  title: string
  description: string
  icon: HomeButtonIcon
}

const HomeSelectButton: FunctionComponent<HomeSelectButtonProps> = ({
  destination,
  title,
  description,
  icon,
}) => {
  const navigate = useNavigate()

  return (
    <button className="btn w-72 h-72 p-14" onClick={() => navigate(destination)}>
      <div className="flex flex-col items-center gap-1">
        <div className="mb-4">
          {/* Brain Icon */}
          {icon == HomeButtonIcon.Brain && <BrainIcon />}

          {/* File Icon */}
          {icon == HomeButtonIcon.File && <ImageFileIcon />}
        </div>

        {/* Text */}
        <span className="text-lg">{title}</span>
        <p className="font-light leading-relaxed">{description}</p>
      </div>
    </button>
  )
}

export default HomeSelectButton
