import Card from '../Card/Card';
import { CardsStyle } from './CardsStyles';

export default function Cards({characters, onClose}) {
   
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
