import { useEffect, useState } from 'react'

function BottomBar() {
  const LIGHT_THEME = 'cmyk'
  const DARK_THEME = 'sunset'

  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    if (storedTheme) {
      return JSON.parse(storedTheme) as string
    } else {
      return 'default'
    }
  })

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <div className="absolute z-10 bottom-0 right-0 m-8">
      <div className="flex gap-4">
        {/* Help */}
        <button className="btn btn-circle text-primary">
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
        </button>

        {/* Theme */}
        <div className="dropdown dropdown-top dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-circle text-primary"
          >
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
                d="M12 7h0m3.5 1.5h0m-7 0h0M7 12h0m9 4h2.7a2 2 0 0 0 1.9-1.3 9 9 0 1 0-16 2.5A9.1 9.1 0 0 0 12 21a2 2 0 0 0 2-2v-.9a2 2 0 0 1 2-2.1Z"
              />
            </svg>
          </div>

          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-200 rounded-box w-52 mb-2"
          >
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                checked={theme == 'default'}
                onChange={() => setTheme('default')}
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Default"
                value="default"
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                checked={theme == LIGHT_THEME}
                onChange={() => setTheme(LIGHT_THEME)}
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Light"
                value={LIGHT_THEME}
              />
            </li>
            <li>
              <input
                type="radio"
                name="theme-dropdown"
                checked={theme == DARK_THEME}
                onChange={() => setTheme(DARK_THEME)}
                className="theme-controller btn btn-sm btn-block btn-ghost justify-start"
                aria-label="Dark"
                value={DARK_THEME}
              />
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default BottomBar
