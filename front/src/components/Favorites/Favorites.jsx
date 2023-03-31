import { connect } from "react-redux";
import Card from "../Card/Card";
import { CardsStyle } from "./favStyled";
import { useDispatch } from "react-redux";
import { orderCards,filterCards } from "../../redux/actions";

const Favorites=({myFavorites})=>{
    const dispatch=useDispatch();

    const handleOrder=(event)=>{
        dispatch(orderCards(event.target.value))
    }

    const handleFilter=(event)=>{
        dispatch(filterCards(event.target.value))
    }

    return(
        <CardsStyle>
            <div>
                <select onChange={handleOrder}>
                    <option value="order" disabled="disabled"></option>
                    <option value="Ascendente">Ascendente</option>
                    <option value="Descendente">Descendente</option>
                </select>
                <select onChange={handleFilter}>
                    <option value="filter" disabled="disabled"></option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Unknown">Unknown</option>
                    <option value="Genderless">Genderless</option>
                </select>
            </div>
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
        </CardsStyle>
    )
}

const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);