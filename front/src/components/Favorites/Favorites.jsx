import { connect } from "react-redux";
import Card from "../Card/Card";
import { CardsStyle, FilterContainer, FilterOption, FilterSelect } from "./favStyled";
import { useDispatch } from "react-redux";
import { orderCards,filterCards } from "../../redux/actions";

const Favorites=({myFavorites})=>{
    const dispatch=useDispatch();

    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value))
        console.log(event.target.value);
    }

    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
        console.log(event.target.value);
    }

    return(
        <CardsStyle>
            <FilterContainer>
                <FilterSelect onChange={handleOrder}>
                    <FilterOption value="order" disabled="disabled"></FilterOption>
                    <FilterOption value="Ascendente">Ascendente</FilterOption>
                    <FilterOption value="Descendente">Descendente</FilterOption>
                </FilterSelect>
                <FilterSelect onChange={handleFilter}>
                    <FilterOption value="filter" disabled="disabled"></FilterOption>
                    <FilterOption value="Male">Male</FilterOption>
                    <FilterOption value="Female">Female</FilterOption>
                    <FilterOption value="Unknown">Unknown</FilterOption>
                    <FilterOption value="Genderless">Genderless</FilterOption>
                </FilterSelect>
            </FilterContainer>
            <div className="cards">
            {myFavorites.map(({id,name,species,gender,image})=>{
                return(
                    <Card
                        key={id}
                        id={id}
                        name={name}
                        species={species}
                        gender={gender}
                        image={image}
                    />
                )
            })}
            </div>
            
        </CardsStyle>
    )
}

const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);