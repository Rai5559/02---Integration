import { CardStyle, CloseButton } from "./cardStyles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFavorite, rmvFavorite } from "../../redux/actions";
import { useState, useEffect } from "react";


function Card({id,onClose,name,species,gender,image, rmvFavorite, addFavorite,myFavorites}) {

   const [isFav, setIsFav]=useState(false);

   const handleFavorite=()=>{
      if(isFav){
         setIsFav(false);
         rmvFavorite(id);
      }
      else{
         setIsFav(true);
         addFavorite({id,onClose,name,species,gender,image});
      }
   }

   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
   }, [myFavorites]);

   return (
      <CardStyle>
         {
          isFav ? (
            <button onClick={handleFavorite}>❤️</button>
            ) : (
            <button onClick={handleFavorite}>🤍</button>
            )
         }     
         <CloseButton onClick={()=>onClose(id)}>X</CloseButton>
         <Link to={`/detail/${id}`} >
            <h1>{name}</h1>
         </Link>
         
         <h2>Species: {species}</h2>
         <h2>Gender: {gender}</h2>
         <img  src={image} alt="" />
      </CardStyle>
   );
}

const mapDispatchToProps=(dispatch)=>{
   return{
      addFavorite:(character)=>{
         dispatch(addFavorite(character));
      },

      rmvFavorite:(id)=>{
         dispatch(rmvFavorite(id));
      }
   }
}

const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
