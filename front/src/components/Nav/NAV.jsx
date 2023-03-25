import React from "react";
import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import { LogoDiv, LogoImage, NavContainer, NavItem, NavLinksContainer, Title } from "./navStyles.js";

export default function Nav(props) {
  return (
    <NavContainer>
        
        <LogoDiv>
        <LogoImage src="https://avowhcbwko.cloudimg.io/v7/https://empreender.nyc3.cdn.digitaloceanspaces.com/grupowhats/c8bdb1368e8adea71244dc6a8d9f4a96?w=400&org_if_sml=1" alt="" />
        <Title>Rick and Morty</Title>
        </LogoDiv>
        
      <NavLinksContainer>
        <NavItem>
          <Link to={"/about"}>
            <h3>About</h3>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/home"}>
            <h3> Home</h3>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={"/favorites"}>
            <h3> Favorites</h3>
          </Link>
        </NavItem>
      </NavLinksContainer>

      <SearchBar onSearch={props.onSearch} />

    </NavContainer>
  );
}
