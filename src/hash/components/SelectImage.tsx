import { open } from '@tauri-apps/api/dialog'
import { FunctionComponent, useState } from 'react'
import TitleHeader from '../../components/TitleHeader'
import ImageIcon from '../../icons/ImageIcon'
import { AllHashTypes, HashType, HashTypeToName } from '../../models/hash_type'

export type SelectImageProps = {
  onSelected: (path: string, hashTypes: Set<HashType>) => void
}

const SelectImage: FunctionComponent<SelectImageProps> = ({ onSelected }) => {
  const [checked, setChecked] = useState(new Set(AllHashTypes))

  const selectImage = async () => {
    const result = await open({
      multiple: false,
      directory: false,
    })

    // if the user didn't select any thing, we just return
    if (result === null) return

    onSelected(result as string, checked)
  }

  return (
    <div className="h-screen w-screen flex justify-center items-center">
      <div className="flex items-center flex-col gap-10">
        {/* Text */}
        <TitleHeader
          title="Generate Image Hashes"
          description="Generates average, difference and perceptual hashes for a selected image."
        />

        {/* Select Button */}
        <div className="flex flex-col items-center gap-4">
          <button
            className="btn btn-primary text-white w-56 h-14"
            disabled={checked.size === 0}
            onClick={() => {
              void (async () => {
                await selectImage()
              })()
            }}
          >
            {/* Image Icon */}
            <ImageIcon />
            Select Image
          </button>

          {/* Checkboxes */}
          <div className="flex gap-4 flex-wrap max-w-md justify-center">
            {AllHashTypes.map((type) => (
              <div key={type} className="form-control">
                <div className="bg-base-200 px-6 py-2 rounded-xl">
                  <label className="label cursor-pointer">
                    <input
                      type="checkbox"
                      className="checkbox checkbox-primary [--chkfg:white]"
                      onChange={() => {
                        if (checked.has(type)) {
                          checked.delete(type)
                          setChecked(new Set([...checked]))
                        } else {
                          setChecked(new Set(checked.add(type)))
                        }
                      }}
                      checked={checked.has(type)}
                    />
                    <span className="ml-3 label-text">{HashTypeToName[type]}</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default SelectImage
