import { IconButton } from '@mui/material'
import VolumeUpIcon from '@mui/icons-material/VolumeUp'
import { searchIllustration, loader } from '../assets'

const Output = ({ definitions, isLoading, appMode }) => {
  const playWord = url => {
    const audio = new Audio(url)
    audio?.play()
  }

  return (
    <div className="mt-4">
      {isLoading && appMode === 'online' && (
        <div className="text-center">
          <img
            src={loader}
            alt="loading"
          />
        </div>
      )}

      {!isLoading && (
        <>
          {!definitions && (
            <div className="text-center fs-4">
              😞 we couldn't find definitions for the word you are looking for.
            </div>
          )}

          {definitions?.length <= 0 && (
            <div className="text-center">
              <img
                src={searchIllustration}
                className="search-illustration"
                alt="search illustration"
              />
              <p>Find meanings to words you care about</p>
            </div>
          )}

          {definitions?.meanings && (
            <div className="definitions-wrapper m-auto overflow-auto rounded">
              <div className="header d-flex align-items-center gap-3">
                {definitions.phonetics[0]?.audio && (
                  <IconButton onClick={() => playWord(definitions.phonetics[0]?.audio)}>
                    <VolumeUpIcon className="volume-icon"/>
                  </IconButton>
                )}
                <div>
                  <p className="m-0 fs-5">{definitions?.word}</p>
                  {definitions?.phonetic && <p className="m-0">{definitions?.phonetic}</p>}
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
        </>
      )}

      {appMode === 'offline' && (
        <div className="text-center fs-4">
          😞 you are in offline mode or some issue with connection.
        </div>
      )}
    </div>
  )
}

export default Output
