import { default as searchBookIllustration } from './searchBookIllustration.svg'

const Output = ({ definitions, setDefinitions }) => {
  console.log(definitions)
  return (
    <div className="output">
      {definitions && (
        <div className="search-output">
          <div>
            hey
          </div>

        </div>
      )}
      {!definitions && (
        <div className="search-book-illustration">
          <img src={searchBookIllustration} alt="search book illustration"/>
          <p>Find meanings to words you care about</p>
        </div>
      )}
    </div>
  )
}

export default Output
