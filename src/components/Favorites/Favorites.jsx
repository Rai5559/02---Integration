import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites=({myFavorites})=>{
    return(
        <div>
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
    )
}

const mapStateToProps=(state)=>{
    return{
        myFavorites:state.myFavorites
    }
}

export default connect(mapStateToProps,null)(Favorites);