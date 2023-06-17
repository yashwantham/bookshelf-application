import { useContext } from "react";
import "./BookCard.css";
import { BookContext } from "../../../../context/BooksProvider";

export function BookCard({book}) {

    const {bookdata, setBookdata} = useContext(BookContext)

    const changeHandler = (e, bookId) => {
        const newBookData = bookdata.map((book) => (
            book._id === bookId ? {...book, category: e.target.value} : book
        ))
        console.log(newBookData)
        setBookdata(() => [...newBookData]);
    }

    return (
        <>
            <div className="bookcard-container" key={book._id}>
                <div className="bookimg-container">
                    <img src={book.bookImg} alt="" height="300" width="200"/>
                </div>
                <div className="booktitle-container">
                    <strong>{book.title}</strong>
                </div>
                <div className="author-container">
                    {book.author}
                </div>
                <div className="dropdown-container">
                    <select name="category" id="" value={book.category} onChange={(e) => changeHandler(e, book._id)}>
                        <option value="currently-reading">Currently Reading</option>
                        <option value="want-to-read">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
        </>
    )
}