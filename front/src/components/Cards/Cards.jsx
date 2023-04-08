import Card from '../Card/Card';
import { CardsStyle } from './CardsStyles';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getFavorites } from '../../redux/actions';

export default function Cards({characters, onClose}) {
   const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFavorites());
  }, []);
   
   return (<CardsStyle>
      {characters.map(({id,name,species,gender,image})=>{
         return (
         <Card 
         key={id}
         id={id}
         onClose={onClose}
         name={name}
         species={species}
         gender={gender}
         image={image}
         />
         )
      })}
   </CardsStyle>);
}
