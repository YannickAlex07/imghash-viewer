import { FunctionComponent } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import TitleHeader from '../../components/TitleHeader'

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
                      <svg
                        className="w-5 h-5 text-error"
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

            {/* Size */}
            <div className="flex gap-3 max-w-sm items-end">
              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Width</span>
                  {errors.width && (
                    <div
                      className="tooltip tooltip-top"
                      data-tip="This field is required, cannot be longer than 6 characters, and must be a number."
                    >
                      <span className="label-text">
                        <svg
                          className="w-5 h-5 text-error"
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
                    validate: (value) => parseInt(value) < 1_000_000,
                  })}
                />
              </div>

              <div className="form-control w-full">
                <div className="label">
                  <span className="label-text">Height</span>
                  {errors.height && (
                    <div
                      className="tooltip tooltip-top"
                      data-tip="This field is required, cannot be longer than 6 characters, and must be a number."
                    >
                      <span className="label-text">
                        <svg
                          className="w-5 h-5 text-error"
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
                  })}
                />
              </div>

              <div
                className="tooltip tooltip-right"
                data-tip="This controls the width and height of the bit matrix. Most matrices are 8x8 encoded bits. If you want to know more, click the help button at the bottom to learn more about how image hashing works."
              >
                <div className="btn btn-square no-animation text-primary pointer-events-none">
                  <svg
                    className="w-6 h-6"
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
                      d="M9.5 10a2.5 2.5 0 1 1 5 .2 2.4 2.4 0 0 1-2.5 2.4V14m0 3h0m9-5a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
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
