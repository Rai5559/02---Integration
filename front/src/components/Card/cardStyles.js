import styled from "styled-components";

export const CardStyle = styled.div`
  background-color: #2c2c54;
  padding: 1rem;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  margin: 1rem;

  :hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
    transition: 0.3s;
  }

  h1,
  h2 {
    color: #fff;
    font-size: 1.5rem;
    margin: 0.5rem 0;
  }

  h1 {
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  h2 {
    font-weight: 600;
    text-transform: capitalize;
  }

  img {
    width: 100%;
    height: auto;
    border-radius: 10px;
    margin-top: 1rem;
  }
`;

export const CloseButton = styled.button`
  width: 30px;
  height: 30px;
  margin: 0.5rem 0 1rem 0;
  border-radius: 50%;
  border: none;
  background-color: #c0392b;
  color: #fff;
  font-size: 1rem;
  cursor: pointer;
  align-self: center;

  :hover {
    box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
    transform: translateY(-5px);
    transition: 0.3s;
  }
`;
