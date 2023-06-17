import { useContext } from "react";
import "./CurrentlyReading.css";
import { BookContext } from "../../../../context/BooksProvider";
import { BookCard } from "../BookCard/BookCard";

export function CurrentlyReading() {

    const {bookdata} = useContext(BookContext);

    const currentlyReading = bookdata.filter(({category}) => category === "currently-reading");

    return (
        <>
        <div className="currentlyreading-container">

            <h2>Currently Reading</h2>
            <div className="currently-reading-list">
            {currentlyReading.map((book) => <BookCard book={book}/>)}
            </div>
        </div>
            <hr />
        </>
    )
}