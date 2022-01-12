import { Form, SearchOutput, ThemeSwitcher } from './components'

const App = () => {
  return (
    <div className="app">
      <ThemeSwitcher />
      <h1>WORD BOOK</h1>
      <Form />
      <SearchOutput />
    </div>
  )
}

export default App
