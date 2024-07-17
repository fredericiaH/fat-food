import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
    //States
const [name, setName] = useState("");
const navigate = useNavigate();
//Components
const handleChange = (e) =>{
  e.preventDefault();
  setName(e.target.value);
  
}


const handleSubmit = (e) =>{
  e.preventDefault();
  //alert("Bonjour "+ name +".");
  //setName("");
  navigate(`order/${name}`);

}

//Render
  return (
    <div>
        <h1>Bienvenue chez nous</h1>  
        <br/>
        <h2>Connectez-vous</h2>
        <form action='submit'onSubmit={handleSubmit} >
        <input value={name} onChange={handleChange} placeholder='Entrez votre prenom' required />
        <button>Accéder à votre espace</button>
        </form>
    </div>
  )
}

