import { useContext } from "react";
import "./WantToRead.css";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function WantToRead() {
    
    const {bookdata} = useContext(BookContext);

    const wantToRead = bookdata.filter(({category}) => category === "want-to-read");

    return (
        <>
        <div className="wanttoread-container-list">
        <h2>Want to Read</h2>
        <div className="wanttoread-list">
        {wantToRead.map((book) => <BookCard book={book}/>)}
        </div>
        </div>
        <hr />
        </>
    )
}