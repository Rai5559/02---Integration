import styled from "styled-components";

export const FormStyle = styled.form`
  color: #ffffff;
  background-color: #1f232d;
  height: 50vh;
  width: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  border-radius: 30px;
  box-shadow: 0 0 10px 0 rgba(255, 255, 255, 0.5);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const DivForm = styled.div`
  padding: 30px;
  background-color: #212a36;
  text-align: center;
  border-radius: 10px;
  width: 400px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  margin-top: 20px;
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  background-color: #e1c10f;
  color: #1f232d;
  font-size: 18px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  margin-top: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;
  &:hover {
    background-color: #f8dc7d;
  }
`;

export const Error = styled.span`
  color: #e74c3c;
`;

