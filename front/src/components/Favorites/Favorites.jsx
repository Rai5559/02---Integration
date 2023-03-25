import { connect } from "react-redux";
import Card from "../Card/Card";
import { CardsStyle } from "./favStyled";

const Favorites=({myFavorites})=>{
    return(
        <CardsStyle>
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