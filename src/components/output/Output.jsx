import { searchBookIllustration, soundIcon } from '../assets'

const Output = ({ definitions }) => {
  return (
    <div className="mt-4">
      {definitions?.length <= 0 && (
        <div className="text-center">
          <img src={searchBookIllustration} alt="search book illustration"/>
          <p>Find meanings to words you care about</p>
        </div>
      )}

      {definitions?.meanings && (
        <div className="definitions-wrapper m-auto overflow-auto">
          <div className="header position-fixed ps-lg-5 d-flex py-2 gap-2">
            <button className="border-0 pointer-event">
              <img src={soundIcon} alt="sound icon"/>
            </button>
            <div>
              <p className="m-0 fs-5">{definitions?.word}</p>
              <p className="m-0">/{definitions?.phonetic}/</p>
            </div>
          </div>
          <ul className="content mx-lg-5 ps-0">
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
