import { useState } from 'react'
import debounce from 'lodash.debounce'
import wordList from 'word-list-json'
import { TextField, ThemeProvider, Autocomplete, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette, setAppMode }) => {
  const [filteredWords, setFilteredWords] = useState([])

  // const changeLanguage = value => {
  //   setDefinitions([])
  //   setSelectedLanguage(value)
  //   setWord('')
  // }

  // const fetchSearchData = async event => {
  //   event.preventDefault()
  //   if (word.trim().length >= 1) {
  //     const url = `https://api.dictionaryapi.dev/api/v2/entries/${languageShortCode}/${word}`
  //     try {
  //       const response = await fetch(url)
  //       const data = await response.json()
  //       setAppMode('online')
  //       setDefinitions(data[0])
  //     } catch (error) {
  //       setAppMode('offline')
  //     }
  //   } else setDefinitions([])
  // }

  const doWordFilter = debounce(value => {
    if(value.trim().length >= 1) {
      const wordFilter = wordList?.filter(word => word.startsWith(value.toLowerCase())).slice(0, 30)
      setFilteredWords(wordFilter)
    } else {
      setFilteredWords([])
    }
  }, 300)

  const doStuff = (event) => {
    event.preventDefault()
    console.log('ok')

  }

  return (
    <ThemeProvider theme={themePalette}>
      <>
        <Autocomplete
          freeSolo
          disableClearable
          options={filteredWords.map(word => word)}
          onInputChange={event => doWordFilter(event.target.value)}
          renderInput={params =>
            <form onSubmit={(event) => doStuff(event)} className="form d-flex m-auto">
              <TextField
                {...params}
                variant="filled"
                label="Search a Word"
              />
              <Button type="submit" variant="contained" id="searchButton">
                <SearchIcon />
              </Button>
            </form>
          }
        />
      </>
    </ThemeProvider>
  )
}

export default Form
