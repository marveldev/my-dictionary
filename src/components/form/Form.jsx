import { useEffect, useState } from 'react'
import useFetch from 'react-fetch-hook'
import debounce from 'lodash.debounce'
import wordList from 'word-list-json'
import { TextField, ThemeProvider, Autocomplete, Button } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

const Form = ({ setDefinitions, themePalette, setIsLoading, setIsError }) => {
  const [filteredWords, setFilteredWords] = useState([])
  const [word, setWord] = useState('')

  const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
  // const url2 = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=b888b747-519c-497b-b7bc-f79b91985d17`
  const { isLoading, data, error } = useFetch(url, {depends: [word]})

  const doWordFilter = debounce(value => {
    if(value.trim().length >= 1) {
      const wordFilter = wordList?.filter(word => word.startsWith(value.toLowerCase())).slice(0, 30)
      setFilteredWords(wordFilter)
    } else {
      setFilteredWords([])
      setWord('')
    }
  }, 300)

  const AddDataToDom = event => {
    event.preventDefault()
    console.log('word==>', word)
  }

  useEffect(() => {
    if (data) {
      console.log('data==>', data[0])
      setIsLoading(null)
    }

    isLoading && setIsLoading(true)
    error && console.log('error')
  }, [data, error, isLoading, setDefinitions, setIsLoading])

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
              onSubmit={event => AddDataToDom(event)}
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
