import { createContext, useEffect, useState } from "react"
import { books } from "../db/books";

export const BookContext = createContext();

export function BooksProvider({ children }) {

    const [bookdata, setBookdata] = useState([]);

    useEffect(() => {
        setBookdata([...books])
    }, [])

    return (
        <>
            <BookContext.Provider value={{bookdata, setBookdata}}>{children}</BookContext.Provider>
        </>
    )
}