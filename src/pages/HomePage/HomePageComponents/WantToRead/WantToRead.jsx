import { useContext } from "react";
import "./WantToRead.css";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function WantToRead() {
    
    const {bookdata} = useContext(BookContext);

    const wantToRead = bookdata.filter(({category}) => category === "want-to-read");

    return (
        <>
        <h1>Want to Read</h1>
        <hr />
        <div className="wanttoread-container">
        {wantToRead.map((book) => <BookCard book={book}/>)}
        </div>
        </>
    )
}