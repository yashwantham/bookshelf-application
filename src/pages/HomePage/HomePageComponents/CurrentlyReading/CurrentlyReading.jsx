import { useContext } from "react";
import "./CurrentlyReading.css";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function CurrentlyReading() {

    const {bookdata} = useContext(BookContext);

    const currentlyReading = bookdata.filter(({category}) => category === "currently-reading");

    return (
        <>
            <h1>Currently Reading</h1>
            <hr />
            <div className="currently-reading-container">
            {currentlyReading.map((book) => <BookCard book={book}/>)}
            </div>
        </>
    )
}