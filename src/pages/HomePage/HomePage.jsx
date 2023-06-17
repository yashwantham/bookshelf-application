
import { NavLink } from "react-router-dom";
import { CurrentlyReading } from "./HomePageComponents/CurrentlyReading/CurrentlyReading";
import { WantToRead } from "./HomePageComponents/WantToRead/WantToRead";
import { Read } from "./HomePageComponents/Read/Read";

import "./HomePage.css";

export function HomePage() {

    return (
        <>
            <div className="top-container">
            <h2 className="lib-title">Library</h2>
            </div>
            <NavLink to="/search" className="search-navigator">Click here to search</NavLink>
            <CurrentlyReading/>
            <WantToRead/>
            <Read/>
        </>
    )
}