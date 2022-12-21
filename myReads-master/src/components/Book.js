import PropTypes from "prop-types";

const Book = ({ book, updateBookCategory, currentSection }) => {

  const bookModifier = (e) => {
    e.preventDefault();
    updateBookCategory(book, e.target.value)
  }
  // CHECK IF IMAGE OF BOOK IS RENDARING OR NOT IF NOT MESSAGE WILL APPEAR
  let bookThumb = book?.imageLinks ? book?.imageLinks?.thumbnail : 'Image Doesnt Exist';
  return <>
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage:`url(${bookThumb})`}}></div>

        <div className="book-shelf-changer">
        <select onChange={bookModifier}
          value={currentSection}>
          <option value='read'>
          read
          </option>
          <option value="change" disabled>
            Move to
          </option>
          <option value='Reading'>
          Reading
          </option>
          <option value='wishList'>
          Wishlist
          </option>
          <option value="none">None</option>
        </select>
      </div>
      </div>
      {/* 
      // CHECK IF BOOK IS EXISITNG OR NOT IF NOT MESSAGE WILL APPEAR
      // CHECK IF AUTHOR IS EXISITNG OR NOT IF NOT MESSAGE WILL APPEAR
      */}

      <div className="book-title">{book.title ? book.title : "Book Doesnt Exist"}</div>
      <div className="book-authors">{book.authors ? book.authors.join(' -- ') : 'Author Doesnt Exist'}</div>
    </div>
              
  </>
};
Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookCategory: PropTypes.func,
  currentSection: PropTypes.string,
}

export default Book