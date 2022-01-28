import { useState } from 'react'
import debounce from 'lodash.debounce'
import wordList from 'word-list-json'
import { TextField, ThemeProvider, Autocomplete, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette, setIsLoading }) => {
  const [filteredWords, setFilteredWords] = useState([])
  const [word, setWord] = useState('')

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`

  const doWordFilter = debounce(value => {
    if(value.trim().length >= 1) {
      const wordFilter = wordList?.filter(word => word.startsWith(value.toLowerCase())).slice(0, 30)
      setFilteredWords(wordFilter)
    } else {
      setFilteredWords([])
      setWord('')
      setDefinitions([])
    }
  }, 300)

  const fetchDefinition = async event => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch(url)
      const data = await response.json()
      if (data) {
        setIsLoading(null)
        setDefinitions(data[0])
      }
    } catch (error) {
      console.log("error", error)
    }
  }

  return (
    <ThemeProvider theme={themePalette}>
      <>
        <Autocomplete
          freeSolo
          disableClearable
          options={filteredWords.map(word => word)}
          onChange={(event, value) =>
            setWord(value)
          }
          renderInput={params =>
            <form
              className="form d-flex m-auto"
              onSubmit={event => fetchDefinition(event)}
            >
              <TextField
                {...params}
                variant="filled"
                label="Search a Word"
                onChange={event => doWordFilter(event.target.value)}
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
