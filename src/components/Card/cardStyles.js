import styled from "styled-components";


export const CardStyle = styled.div`
  background-color: #97ce4c;
  padding: 1rem;
  border-radius: 15px;
  display:flex;
  flex-direction: column;
  margin: 1rem;

  :hover{
    -webkit-box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
-moz-box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
    transition: 120ms;
  }
 
`;


export const CloseButton=styled.button`
  width: 10%;
  margin: auto;
  border-radius: 20px;
  border: none;
  background-color: #e89ac7;

  :hover{
    -webkit-box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
-moz-box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
box-shadow: 10px 10px 5px 0px rgba(251, 248, 250, 0.8);
transition: 120ms;
  }
`

