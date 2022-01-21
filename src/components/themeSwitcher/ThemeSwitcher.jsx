import { MaterialUISwitch } from './MUISwitch'

const ThemeSwitcher = ({ theme, setTheme, themePalette }) => {
  const switchTheme = () => {
    const currentTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(currentTheme)
    localStorage.setItem('theme', currentTheme)
  }

  return (
    <div className="text-end mx-4 mt-1">
      <MaterialUISwitch
        theme={themePalette}
        onChange={switchTheme}
        defaultChecked={theme === 'dark' && true}
      />
    </div>
  )
}

export default ThemeSwitcher
