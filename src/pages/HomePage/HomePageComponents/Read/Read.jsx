import { useContext } from "react";
import "./Read.css";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function Read() {

    const {bookdata} = useContext(BookContext);

    const read = bookdata.filter(({category}) => category === "read");


    return (
        <>
        <div className="read-container">
        <h2>Read</h2>
        <div className="read-list">
        {read.map((book) => <BookCard book={book}/>)}
        </div>
        </div>
        <hr />
        </>
    )
}