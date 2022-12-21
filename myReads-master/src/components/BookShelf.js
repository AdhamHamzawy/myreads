import Book from "./Book";
import PropTypes from "prop-types";

const BookSection = ({ updateBookSection, books, title }) => {
    
  return <>
      <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">
                {books &&
                books.map((book) => (
                  <li key={book.id}>
                  <Book updateBookSection={updateBookSection} currentShelf={book.shelf} book={book}/>
                  </li>
                  ))}  
                </ol>
              </div>
            </div>
      </div>
  </>

};

BookSection.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookSection: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default BookSection