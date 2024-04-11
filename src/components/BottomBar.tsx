import { FunctionComponent, useEffect, useState } from 'react'
import HelpIcon from '../icons/HelpIcon'
import ThemeIcon from '../icons/ThemeIcon'

const BottomBar: FunctionComponent = () => {
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
          <HelpIcon />
        </button>

        {/* Theme */}
        <div className="dropdown dropdown-top dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle text-primary">
            <ThemeIcon />
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
