import styled from "styled-components";

export const NavBar= styled.div`
    background-color: #44281d;
    width: 75%;
    margin: 4rem auto;
    border-radius: 15px;

    :hover{
    -webkit-box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
-moz-box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
    transition: 120ms;
  }
`

export const NavInput= styled.input`
    border-radius: 1rem 0 0 1rem;
    border-right: none;
    margin: 5px;
    margin-right: 0;
`


export const NavButton= styled.button`
    border-radius: 0 1rem 1rem 0;
    border-left: none;
    
`