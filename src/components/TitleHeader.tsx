import { FunctionComponent } from 'react'

export type TitleHeaderProps = {
  title: string
  description: string
}

const TitleHeader: FunctionComponent<TitleHeaderProps> = ({ title, description }) => {
  return (
    <div className="flex flex-col items-center gap-y-2">
      <h1 className="text-4xl font-extrabold">{title}</h1>
      <p className="text-center max-w-md">{description}</p>
    </div>
  )
}

export default TitleHeader
