import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
  width: 80%;
  max-width: 1000px;
  color: white;
  background-color: #003366;
    padding: 50px;
    border-radius: 10px;
    margin-top: 250px;
`;

export const AboutImg = styled.img`
  margin-right: 50px;
  width: 150px;
  height: 150px;
  border-radius: 50%;
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 0;
`;

export const Subtitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 300;
  margin-top: 0;
  margin-bottom: 20px;
`;

export const Text = styled.p`
  font-size: 1.2rem;
  line-height: 1.5;
  margin-bottom: 20px;
`;
