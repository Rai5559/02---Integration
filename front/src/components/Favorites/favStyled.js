import styled from "styled-components";

export const CardsStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  
  .filters {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

export const FilterSelect = styled.select`
  padding: 0.5rem;
  border: none;
  border-radius: 5px;
  background-color: #003366;
  color: #fff;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #2c2c54;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 40, 164, 1);
  }
`;

export const FilterOption = styled.option`
  background-color: #003366;
  color: #fff;

  &:hover {
    background-color: #2c2c54;
  }
`;