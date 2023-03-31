import { CardStyle, CloseButton } from "./cardStyles";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useState, useEffect } from "react";
import axios from "axios";


function Card({id,onClose,name,species,gender,image, myFavorites}) {

   const [isFav, setIsFav]=useState(false);

   async function addFavorite(fav){
      try{
         const response=await axios.post("http://localhost:3001/rickandmorty/fav",fav);
         console.log(response);
      }
      catch(error){
         console.log(error);
      }
   }
   // const addFavorite=(fav)=>{
   //    axios
   //       .post("http://localhost:3001/rickandmorty/fav",fav)
   //       .then((res) => console.log({message:"added to favorites"}))
   //       .catch((err) => console.log(err));
   // }

   async function rmvFavorite(id){
      try{
         const response=await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`);
         console.log(response);
      }
      catch(error){
         console.log(error);
      }
   }
   // const rmvFavorite=(id)=>{
   //    axios
   //       .delete(`http://localhost:3001/rickandmorty/fav/${id}`)
   //       .then((res) => console.log({message:"removed from favorites"}))
   //       .catch((err) => console.log(err));
   // }

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
      
   }
}

const mapStateToProps=(state)=>{
   return{
      myFavorites:state.myFavorites,
   }
}

export default connect(mapStateToProps,mapDispatchToProps)(Card);
