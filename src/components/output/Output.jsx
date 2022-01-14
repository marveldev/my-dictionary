import { searchBookIllustration, soundIcon } from '../assets'

const Output = ({ definitions, setDefinitions }) => {
  const { word, phonetic, meanings } = definitions

  return (
    <div className="mt-4">
      {definitions?.length <= 0 ? (
        <div className="text-center">
          <img src={searchBookIllustration} alt="search book illustration"/>
          <p>Find meanings to words you care about</p>
        </div>
      ) : (
        <div className="definitions-wrapper m-auto overflow-auto">
          <div className="header position-fixed ps-lg-5 d-flex gap-2">
            <button className="bg-transparent border-0 pointer-event">
              <img src={soundIcon} alt="sound icon"/>
            </button>
            <div>
              <p className="m-0 fs-5">{word}</p>
              <p>/{phonetic}/</p>
            </div>
          </div>
          <ul className="content mx-lg-5 ps-0">
            {meanings?.map((meaning, index) => (
              <li key={index}>
                <p>"partOfSpeech": {meaning.partOfSpeech}</p>
                {meaning.definitions?.map((data, index) => (
                  <div key={index} className="definition text-white rounded px-2">
                    <p>{data.definition}</p>
                    <p className="my-0">
                      <span className="me-2">Example:</span>
                      {data.example}
                    </p>
                    <p>
                      <span className="me-2">Synonyms:</span>
                      {data.synonyms}
                    </p>
                  </div>
                ))}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Output
