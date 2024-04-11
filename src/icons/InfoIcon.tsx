import { FunctionComponent } from 'react'

export type InfoIconProps = {
  type: 'default' | 'error'
  size: 'default' | 'sm'
}

const InfoIcon: FunctionComponent<InfoIconProps> = ({ type, size }) => {
  const errorClass = type === 'error' ? 'text-error' : ''
  const sizeClass = size === 'sm' ? 'w-5 h-5' : 'w-6 h-6'

  return (
    <svg
      className={`${sizeClass} ${errorClass}`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M12 13V8m0 8h0m9-4a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
      />
    </svg>
  )
}

export default InfoIcon
