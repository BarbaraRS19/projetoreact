import '../App.css'
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
import Banner from '../components/Banner'
import Sobre from '../components/Sobre'
import Fotos from '../components/Fotos'
import Titulo from '../components/Titulo'

function Home() {
const irPara = useNavigate();
const handleClick = () => {
    irPara('/sobre');
  };

  return (
    <div>
<Header/>
<Banner/>
<button onClick={handleClick}>Saiba Mais</button>
<Sobre/>
<Fotos/>
<Titulo/>
    </div>
   
  )
}

export default Home
