import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import TitleHeader from '../../components/TitleHeader'
import InfoIcon from '../../icons/InfoIcon'

export type HashFormData = {
  hash: string
  width: string
  height: string
}

export type HashFormProps = {
  onSubmit: (data: HashFormData) => void
}

const HashForm: FunctionComponent<HashFormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<HashFormData>({ mode: 'all' })

  const submitHandler: SubmitHandler<HashFormData> = (data) => {
    onSubmit(data)
  }

  return (
    <div>
      <div className="h-screen flex flex-col justify-center items-center">
        {/* Text */}
        <TitleHeader
          title="Decode Image Hash"
          description="Converts any hash to its corresponding bit matrix and visualizes it."
        />

        <form
          // eslint-disable-next-line @typescript-eslint/no-misused-promises
          onSubmit={handleSubmit(submitHandler)}
          className="flex justify-center mt-6"
        >
          <div className="flex-col gap-y-3 form-control items-center">
            {/* Hash */}
            <div className="form-control w-full">
              <div className="label">
                <span className="label-text">Hex-Encoded Hash</span>
                {errors.hash && (
                  <div className="tooltip tooltip-top" data-tip="This field is required.">
                    <span className="label-text">
                      <InfoIcon type="error" size="sm" />
                    </span>
                  </div>
                )}
              </div>
              <input
                type="text"
                className="input input-bordered w-full"
                placeholder="Hash"
                {...register('hash', { required: true })}
              />
            </div>

            {/* Width */}
            <div className="flex gap-3 max-w-sm items-end">
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Width</span>
                  {errors.width && (
                    <div
                      className="tooltip tooltip-top"
                      data-tip="This field is required, must be > 0, cannot be longer than 6 characters, and must be a number."
                    >
                      <span className="label-text">
                        <InfoIcon type="error" size="sm" />
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="X"
                  defaultValue={8}
                  {...register('width', {
                    valueAsNumber: true,
                    required: true,
                    maxLength: 6,
                    min: 1,
                  })}
                />
              </div>

              {/* Height */}
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Height</span>
                  {errors.height && (
                    <div
                      className="tooltip tooltip-top"
                      data-tip="This field is required, must be > 0, cannot be longer than 6 characters, and must be a number."
                    >
                      <span className="label-text">
                        <InfoIcon type="error" size="sm" />
                      </span>
                    </div>
                  )}
                </div>
                <input
                  type="number"
                  className="input input-bordered w-full"
                  placeholder="Y"
                  defaultValue={8}
                  {...register('height', {
                    valueAsNumber: true,
                    required: true,
                    maxLength: 6,
                    min: 1,
                  })}
                />
              </div>

              <div
                className="tooltip tooltip-right"
                data-tip="This controls the width and height of the bit matrix. Most matrices are 8x8 encoded bits. If you want to know more, click the help button at the bottom to learn more about how image hashing works."
              >
                <div className="btn btn-square no-animation text-primary pointer-events-none">
                  <InfoIcon type="default" size="default" />
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="btn btn-primary text-white w-full" type="submit" disabled={!isValid}>
              Convert
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default HashForm
