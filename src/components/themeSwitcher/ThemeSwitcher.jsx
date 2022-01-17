import { MaterialUISwitch } from './MUISwitch'

const ThemeSwitcher = ({ darkTheme, setDarkTheme }) => {
  return (
    <div className="text-end mx-4 mt-1">
      <MaterialUISwitch onChange={() => setDarkTheme(!darkTheme)} />
    </div>
  )
}

export default ThemeSwitcher
