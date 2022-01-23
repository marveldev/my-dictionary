import { IconButton } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { searchBookIllustration } from '../assets'

const Output = ({ definitions }) => {
  const playWord = url => {
    const audio = new Audio(`https:${url}`)
    audio?.play()
  }

  return (
    <div className="mt-4">
      {definitions?.length <= 0 && (
        <div className="text-center">
          <img
            src={searchBookIllustration}
            className="w-auto h-auto"
            alt="search book illustration"
          />
          <p>Find meanings to words you care about</p>
        </div>
      )}

      {definitions?.meanings && (
        <div className="definitions-wrapper m-auto overflow-auto rounded">
          <div className="header d-flex align-items-center gap-3">
            {definitions?.phonetic && (
              <IconButton onClick={() => playWord(definitions?.phonetics[0].audio)}>
                <VolumeUpIcon className="volume-icon"/>
              </IconButton>
            )}
            <div>
              <p className="m-0 fs-5">{definitions?.word}</p>
              {definitions?.phonetic && <p className="m-0">/{definitions?.phonetic}/</p>}
            </div>
          </div>
          <ul className="mx-lg-5 ps-0">
            {definitions?.meanings.map((meaning, index) => (
              <li key={index}>
                <p>"partOfSpeech": {meaning.partOfSpeech}</p>
                {meaning.definitions?.map((data, index) => (
                  <div key={index} className="definition text-white rounded p-2 mb-3">
                    <p className="fw-bold">{data.definition}</p>
                    <p>
                      <span className="me-2 fw-bold">Example:</span>
                      {data.example}
                    </p>
                    <p className="mb-0">
                      <span className="me-2 fw-bold">Synonyms:</span>
                      {data.synonyms.join(', ')}
                    </p>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!definitions && (
        <div className="text-center fs-4">
          😞 we couldn't find definitions for the word you are looking for.
        </div>
      )}
    </div>
  )
}

export default Output
