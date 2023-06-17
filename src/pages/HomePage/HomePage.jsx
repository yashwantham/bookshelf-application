
import { NavLink } from "react-router-dom";
import { CurrentlyReading } from "./HomePageComponents/CurrentlyReading/CurrentlyReading";
import { WantToRead } from "./HomePageComponents/WantToRead/WantToRead";
import { Read } from "./HomePageComponents/Read/Read";

export function HomePage() {

    return (
        <>
            <h1>Home</h1>
            <NavLink to="/search">Click here to search</NavLink>
            <CurrentlyReading/>
            <WantToRead/>
            <Read/>
        </>
    )
}