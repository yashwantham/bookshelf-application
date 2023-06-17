import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { BookContext } from "../../context/BooksProvider";
import { BookCard } from "../HomePage/HomePageComponents/BookCard/BookCard";

import "./SearchPage.css";

export function SearchPage() {

    const {bookdata} = useContext(BookContext);

    // let displayBookdata = [...bookdata];
    const [displayBookdata, setDisplayBookdata] = useState([...bookdata])

    const inputChangeHandler = (e) => {
        const searchResult = bookdata.filter(({title}) => title.toLowerCase().includes(e.target.value.toLowerCase()))
        setDisplayBookdata(() => [...searchResult])
    }

    return (
        <>
        <div className="searchpage-container">
        <NavLink to="/" className="go-back">Go back to library</NavLink>
        <div className="searchinput-container">
            Search: <input type="text" className="input-box" onChange={inputChangeHandler}/>
        </div>
        <div className="booklist-container">
            {displayBookdata.map((book) => (
                <div className="one-card">
                    <BookCard book={book}/>
                </div>
            ))}
        </div>
        </div>
        </>
    )
}