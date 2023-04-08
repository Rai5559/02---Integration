import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003366; 
  padding: 10px 30px;
  border-radius: 20px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavItem = styled.div`
  margin-right: 20px;

  & a {
    text-decoration: none;
    color: white;
  }

  & h3 {
    margin: 20px;
    font-size: 2rem;
    font-weight: normal;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: 'Get Schwifty', sans-serif;
  }

  & h3:hover {
    color: #ffcc00; 
  }
`;

export const LogoImage = styled.img`
    height: 20%;
    width: 20%;
    border-radius: 50%;
    border-style: double;
    border-color: #ffcc00;
`;

export const Title = styled.h1`
  font-family: 'Get Schwifty', sans-serif;
  font-size: 4rem;
  text-align: center;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  margin-left: 30px;
`;

export const LogoDiv= styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;
