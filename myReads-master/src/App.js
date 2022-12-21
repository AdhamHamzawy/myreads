import "./App.css";
import { useEffect, useState } from "react";
import FitchBook from "./components/Search";
import BookList from "./components/BookList";
import * as BooksAPI from './BooksAPI';
import { Route, Routes } from "react-router-dom";

function App() {
  const [books, setBooks] = useState([]);

  // fitch for all books
  useEffect(() => {  
      (async () => {
        const res = await BooksAPI.getAll();
        setBooks(res); 
    })()
     }, [])

  // here we update the section state
  const updateBookCategory = async (book, shelf) => {
  await BooksAPI.update(book, shelf).then(() => {
    book.shelf = shelf
    setBooks(books.filter(b => book.id !== b.id).concat(book))
  })
  } 
  return (
    <Routes>
      <Route 
      exact
      path="/"
      element={<BookList books={books} updateBookCategory={updateBookCategory}
      />}
      />
      <Route 
      path="/search"
      element={
      <FitchBook books={books} updateBookCategory={updateBookCategory}
      />}
      />
    </Routes>
  );
}

export default App;
