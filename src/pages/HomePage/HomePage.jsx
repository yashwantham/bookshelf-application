import { NavLink } from "react-router-dom";

export function HomePage() {
    return (
        <>
            <h1>Home</h1>
            <NavLink to="/search">Click here to search</NavLink>
        </>
    )
}