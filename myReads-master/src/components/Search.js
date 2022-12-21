import { useEffect, useState } from "react";
import * as BooksAPI from '../BooksAPI'; 
import Book from "./Book";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const FitchBook = ({ books, updateBookCategory }) => {
  console.log("print here")
    const [query, setQuery] = useState("");
    const [bookResult, setBookResult] = useState([]);
     useEffect(() => {
    const booksResult = setTimeout( async () => {  {/* 
    // fitch books and return book to its section the clear the book after time    
    */}
        if(query.length !== '' && query.length > 0) {
            await BooksAPI.search(query.trim()).then(res => {
              if(res.error) {
                setBookResult([])
                
              } else {
                res.forEach((searchedBook) => {
                  searchedBook.shelf = 'none'
                  books.map((book) => (  
                    book.id !== searchedBook.id
                    ?
                    searchedBook.shelf = 'none'
                    :
                    searchedBook.shelf = book.shelf                    
                    ))
                    console.log("print here 22")
                  })
                  setBookResult(res)
              } 
            })
          } else if(query.length === 0) {
            setBookResult([])
          }}, 50);

       return () => {
            clearTimeout(booksResult);
        } 

    }, [query, books]);
    
    return <>
    <div className="search-books">
          <div className="search-books-bar">
          <Link to='/' className="close-search">Exit</Link>
            
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search Here"
                value={query}
                onChange={(event) => setQuery(event.target.value)}/>
            </div>
          </div>
          
          <div className="search-books-results">
            <ol className="books-grid">
        {bookResult.length > 0 ?
		bookResult?.filter(b => b.title.toLowerCase().includes(query.toLowerCase())).map((searchedBook)=> (<Book
                  book={searchedBook}
                  updateBookCategory={updateBookCategory}
                />             
              )) 
              :
              <p></p>             
        }
         
            </ol>
          </div>
        </div>
    </>
};

FitchBook.propTypes = {
  books: PropTypes.array.isRequired,
  updateBookCategory: PropTypes.func,
}

export default FitchBook