import React from "react";
import SearchBar from '../SearchBar/SearchBar.jsx'
import {Link} from "react-router-dom"

export default function Nav (props){
    return (
        <div>
            <Link to={("/about")}><h3>About</h3></Link>
            <Link to={("/home")}><h3> Home</h3></Link>
            <Link to={("/favorites")}><h3> Favorites</h3></Link>
            <SearchBar onSearch={props.onSearch}/>
        </div>
    )
}