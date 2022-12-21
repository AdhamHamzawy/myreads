import PropTypes from "prop-types";
import Book from "./Book";

const BookSection = ({ updateBookCategory, books, title }) => {
    
  return <>
      <div>
            <div className="bookshelf">
              <h2 className="bookshelf-title">{title}</h2>
              <div className="bookshelf-books">
                <ol className="books-grid">

                  
                {books &&
                books.map((book) => (
                  /* searching and filtering the books array to get only the books in current section and updating the state
                      */
                  <li key={book.id}>
                  <Book updateBookCategory={updateBookCategory} currentSection={book.shelf} book={book}/>
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
  updateBookCategory: PropTypes.func,
  title: PropTypes.string.isRequired,
}

export default BookSection