import { open } from '@tauri-apps/api/dialog'
import { FunctionComponent } from 'react'
import TitleHeader from '../../components/TitleHeader'

export type SelectImageProps = {
  onSelected: (path: string) => void
}

const SelectImage: FunctionComponent<SelectImageProps> = ({ onSelected }) => {
  const selectImage = async () => {
    const result = await open({
      multiple: false,
      directory: false,
    })

    // if the user didn't select any thing, we just return
    if (result === null) return

    onSelected(result as string)
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex items-center flex-col gap-8">
        {/* Text */}
        <TitleHeader
          title="Generate Image Hashes"
          description="Generates average, difference and perceptual hashes for a selected image."
        />

        {/* Select Button */}
        <button
          className="btn btn-primary text-white w-56"
          onClick={() => {
            void (async () => {
              await selectImage()
            })()
          }}
        >
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M13 10c0-.6.4-1 1-1a1 1 0 1 1 0 2 1 1 0 0 1-1-1Z"
              clipRule="evenodd"
            />
            <path
              fillRule="evenodd"
              d="M2 6c0-1.1.9-2 2-2h16a2 2 0 0 1 2 2v12c0 .6-.2 1-.6 1.4a1 1 0 0 1-.9.6H4a2 2 0 0 1-2-2V6Zm6.9 12 3.8-5.4-4-4.3a1 1 0 0 0-1.5.1L4 13V6h16v10l-3.3-3.7a1 1 0 0 0-1.5.1l-4 5.6H8.9Z"
              clipRule="evenodd"
            />
          </svg>
          Select Image
        </button>
      </div>
    </div>
  )
}

export default SelectImage
