import BookSection from "./BookSection";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";


const BookList = ({ books, updateBookCategory }) => {
  const shelves = [
    { title: "Currently Reading", shelf: "Reading" },
    { title: "Want to Read", shelf: "wishList" },
    { title: "Read", shelf: "read" }
  ];

  return <>
  {
    // render and view the page and the sections inside with the books related to those sections 
  }
  <div className="list-books">
        <div className="list-books-title">
          <h1>My Readingss</h1>
        </div>
        <div className="list-books-content">
        {shelves.map((bookshelf, index) => (
            <BookSection
              key={index}
              title={bookshelf.title}
              books={books.filter(book => book && book.shelf === bookshelf.shelf)}
              updateBookCategory={updateBookCategory}/>
          ))}
        </div>
        <div className="open-search">
          <Link to='/search'>Add New book</Link>
        </div>
      </div>
      </>
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookCategory: PropTypes.func,
}

export default BookList