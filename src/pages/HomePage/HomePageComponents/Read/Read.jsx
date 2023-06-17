import { useContext } from "react";
import "./Read.css";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function Read() {

    const {bookdata} = useContext(BookContext);

    const read = bookdata.filter(({category}) => category === "read");


    return (
        <>
        <h1>Read</h1>
        <hr />
        <div className="read-container">
        {read.map((book) => <BookCard book={book}/>)}
        </div>
        </>
    )
}