import styled from "styled-components";

export const DivContainer = styled.div`
  margin: 3rem auto;
  width: 50%;
  background-color: #2c2c54;
  color: white;
  padding: 2rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 250px;


  img {
    display: block;
    margin: 1rem auto;
    max-width: 100%;
    height: auto;
    border-radius: 10px;
  }

  .loading-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .loading-image {
    border-radius: 50%;
    border-style: double;
    border-color: #ffcc00;
  }

  .loading-text {
    align-self: center;
    font-family: 'Get Schwifty', sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 5px;
  }
`;

export const H1Title = styled.h1`
    text-align: center;
    font-weight: bold;
    text-transform: uppercase;
    letter-spacing: 2px;
`;

export const SpanText = styled.span`
    font-weight: 300;
    text-transform: capitalize;
`;
