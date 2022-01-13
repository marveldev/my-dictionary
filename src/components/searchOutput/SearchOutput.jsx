import { default as searchBookIllustration } from './searchBookIllustration.svg'

const SearchOutput = () => {
  return (
    <div>
      <div className="search-book-illustration">
        <img src={searchBookIllustration} alt="search book illustration"/>
        <p>Find meanings to words you care about</p>
      </div>
    </div>
  )
}

export default SearchOutput
