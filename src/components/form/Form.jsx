import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import debounce from 'lodash.debounce'
import wordList from 'word-list-json'
import { TextField, ThemeProvider, Autocomplete, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette, setIsLoading, setIsError }) => {
  const [filteredWords, setFilteredWords] = useState([])
  const [word, setWord] = useState('')
  const [fetchData, setFetchData] = useState(null)

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  const { isLoading, data, error } = useFetch(url, {depends: [word, fetchData]})

  const doWordFilter = debounce(value => {
    if(value.trim().length >= 1) {
      const wordFilter = wordList?.filter(word => word.startsWith(value.toLowerCase())).slice(0, 30)
      setFilteredWords(wordFilter)
      setWord(value)
    } else {
      setFilteredWords([])
      setWord('')
    }
  }, 300)

  const addDataToDom = event => {
    event.preventDefault()
    setFetchData(true)
  }

  useEffect(() => {
    if (fetchData) {
      data && setDefinitions(data[0])
      isLoading && setIsLoading(true)
      error && setIsError(true)
      setFetchData(null)
    }
  }, [data, error, fetchData, isLoading, setDefinitions, setIsError, setIsLoading])

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
              onSubmit={event => addDataToDom(event)}
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
