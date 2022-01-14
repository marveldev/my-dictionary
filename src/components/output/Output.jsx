import { searchBookIllustration, soundIcon } from '../assets'

const Output = ({ definitions, setDefinitions }) => {
  return (
    <div className="mt-4">
      {definitions && (
        <div className="definitions-wrapper m-auto overflow-auto">
          <div className="header position-fixed ps-lg-5 d-flex align-items-center gap-2">
            <button className="bg-transparent border-0 pointer-event">
              <img src={soundIcon} alt="sound icon"/>
            </button>
            <div>
              <p className="m-0 fs-5">good</p>
              <p>/ɡʊd/</p>
            </div>
          </div>
          <ul className="content mx-lg-5 ps-0">
            <li>
              <p>"partOfSpeech": adjective</p>
              <div className="definition text-white rounded px-2">
                <p>to be desired or approved of.</p>
                <p className="my-0">
                  <span className="me-2">Example:</span>
                  "it's good that he's back to his old self"
                </p>
                <p>
                  <span className="me-2">Synonyms:</span>
                  "it's good that he's back to his old self"
                </p>
              </div>
            </li>
          </ul>
        </div>
      )}
      {!definitions && (
        <div className="text-center">
          <img src={searchBookIllustration} alt="search book illustration"/>
          <p>Find meanings to words you care about</p>
        </div>
      )}
    </div>
  )
}

export default Output
