import { TextField } from '@mui/material'

const Form = () => {
  const languages = ['English', 'India', 'China']

  return (
    <div className="form">
      <div className="search-box">
        <TextField id="fullWidth" fullWidth label="Search a Word" variant="filled" />
      </div>

      <div className="language-select-box">
        <TextField
          label="Language"
          value="English"
          variant="filled"
          fullWidth
          select
        >
          {languages.map(language => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </TextField>
      </div>
    </div>
  )
}

export default Form
