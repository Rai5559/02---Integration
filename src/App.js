import { BgStyle } from './AppStyles.js'
import Cards from './components/Cards/Cards.jsx'
import Nav from './components/Nav/NAV.jsx'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/views/About.jsx'
import Detail from './components/views/Details.jsx'
import Forms from './components/Forms/Forms.jsx'
import { useEffect, useState } from 'react'
import Favorites from './components/Favorites/Favorites.jsx'

function App () {
  const [characters, setCharacters] = useState([])
  const [access,setAccess]=useState(false)
  const Username="email@email.com";
  const Password="abc123";

  const onSearch=(id)  => {
    const urlBASE="https://be-a-rym.up.railway.app/api";
    const key="5c7b65ba57e1.21d29bcea914b4f4d504";

    fetch(`${urlBASE}/character/${id}?key=${key}`)
       .then((response) => response.json())
       .then((data) => {

        if (characters.find(char=>char.id===data.id)) return alert("Ya existe");
          if (data.name) {

             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             alert('No hay personajes con ese ID');
          }
       });
  }

  const onClose=(id)=>{
    setCharacters(characters.filter((char)=>char.id!==id));
  }

  const {pathname}=useLocation();

  const navigate = useNavigate();
  const login=(userData)=>{
    if (userData.password === Password && userData.username === Username) {
      setAccess(true);
      navigate('/home');
   }
  }
  useEffect(() => {
    !access && navigate('/');
 }, [access]);
  
  return (
    <BgStyle className='App' style={{ padding: "25px" }}>
      
      <div style={{textAlign:"center"}}>
        {pathname!=="/" && <Nav onSearch= {onSearch}/>}
      </div>
      
      <Routes>

        <Route path='/' element={<Forms login={login} />}/>

        <Route path='/home' element={<Cards
              characters={characters}
              onClose={onClose}
            />}/>

        <Route path='/about' element={<About/>}/>

        <Route path='/favorites' element={<Favorites/>}/>

        <Route path='/detail/:detailId' element={<Detail/>}/>
        

      </Routes>

    </BgStyle>
  )
};

export default App
