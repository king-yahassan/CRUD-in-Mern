import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
            <nav>
                <Link to="/" style={{marginLeft:'100px',textDecoration:'none'}} > Home</Link>
                <Link to="/new-user" style={{marginLeft:'100px',textDecoration:'none'}} > Add-User</Link>
            </nav>
        </>

    )
}
export default Navigation;