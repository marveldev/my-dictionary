import { FormControlLabel } from '@mui/material'
import { MaterialUISwitch } from './MUISwitch'

const ThemeSwitcher = ({ theme, setTheme, themePalette }) => {
  const switchTheme = () => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(currentTheme)
    localStorage.setItem('theme', currentTheme)
  }

  return (
    <div className="theme-switcher">
      <FormControlLabel
        label=""
        control={
          <MaterialUISwitch
            theme={themePalette}
            onChange={switchTheme}
            checked={theme === 'dark' && true}
            aria-label="switch theme"
          />
        }
      />
    </div>
  )
}

export default ThemeSwitcher
