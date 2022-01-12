import { Form, SearchOutput, ThemeSwitcher } from './components'

const App = () => {
  return (
    <div className="app">
      <ThemeSwitcher />
      <Form />
      <SearchOutput />
    </div>
  )
}

export default App
