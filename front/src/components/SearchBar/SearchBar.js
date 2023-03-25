import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  background-color: #008080; /* Usamos un color verde oscuro */
  padding: 10px;
  border-radius: 20px;
`;

export const NavInput = styled.input`
  border-radius: 5px;
  border: none;
  margin-right: 10px;
  padding: 5px;
  font-size: 16px;
  width: 200px;
`;

export const NavButton = styled.button`
  background-color: #4caf50; /* Usamos un color verde claro */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #3e8e41; /* Cambiamos el color al hacer hover */
  }
`;
