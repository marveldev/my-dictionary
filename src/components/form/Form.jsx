import { useState } from 'react'
import { MenuItem, TextField } from '@mui/material'

const Form = ({ setDefinitions }) => {
  const languages = ['English(EN)', 'French(FR)', 'German(DE)', 'Spanish(ES)', 'Italian(IT)']
  const [selectedLanguage, setSelectedLanguage] = useState('English(EN)')
  const languageShortCode = selectedLanguage.slice(-3, -1)
  const [word, setWord] = useState('')

  const changeLanguage = value => {
    setDefinitions([])
    setSelectedLanguage(value)
    setWord('')
  }
  
  const fetchSearchData = async event => {
    event.preventDefault()
    if (word.trim().length >= 1) {
      const url = `https://api.dictionaryapi.dev/api/v2/entries/${languageShortCode}/${word}`
      const response = await fetch(url)
      const data = await response.json()
      setDefinitions(data[0])
    }
  }

  return (
    <div className="form d-flex gap-3 text m-auto my-3">
      <form
        className="d-flex flex-grow-1"
        onSubmit={event => fetchSearchData(event)}
      >
        <TextField
          label="Search a Word"
          variant="filled"
          value={word}
          onChange={event => setWord(event.target.value)}
          fullWidth
        />
        <button
          type="submit"
          className="btn btn-primary rounded-0 rounded-end w-25"
        >
          <i className="fa fa-search" />
        </button>
      </form>

      <div>
        <TextField
          label="Language"
          value={selectedLanguage}
          variant="filled"
          onChange={event => changeLanguage(event.target.value)}
          fullWidth
          select
        >
          {languages.map(language => (
            <MenuItem key={language} value={language}>
              {language}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </div>
  )
}

export default Form
