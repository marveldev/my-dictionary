import { TextField } from '@mui/material'

const Form = () => {
  const languages = ['English', 'India', 'China']

  return (
    <div className="form">
      <TextField label="Search a Word" variant="filled" />
      <TextField
        label="Language"
        value="English"
        variant="filled"
        select
      >
        {languages.map(language => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </TextField>
    </div>
  )
}

export default Form
