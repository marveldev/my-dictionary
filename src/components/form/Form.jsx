import debounce from 'lodash.debounce'
import { useState } from 'react'
import { MenuItem, TextField } from '@mui/material'

const Form = ({ setDefinitions }) => {
  const languages = ['English(EN)', 'French(FR)', 'German(DE)', 'Spanish(ES)', 'Italian(IT)']
  const [selectedLanguage, setSelectedLanguage] = useState('English(EN)')

  const fetchSearchData = debounce(async value => {
    if (value.trim().length >= 1) {
      const languageShortCode = selectedLanguage.slice(-3, -1)
      const url = `https://api.dictionaryapi.dev/api/v2/entries/${languageShortCode}/${value}`
      const response = await fetch(url)
      const data = await response.json()
      setDefinitions(data)
      // console.clear()
    }
    else {
      setDefinitions()
    }
  }, 300)

  return (
    <div className="form">
      <div className="search-box">
        <TextField
          label="Search a Word"
          variant="filled"
          onChange={event => fetchSearchData(event.target.value)}
          fullWidth
        />
      </div>

      <div className="select-language-box">
        <TextField
          label="Language"
          value={selectedLanguage}
          variant="filled"
          onChange={event => setSelectedLanguage(event.target.value)}
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
