import React, { useState } from 'react'
import { Form, useNavigate } from 'react-router-dom';

export default function LoginForm() {
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
  navigate(`order/${name}`);

}

//Render
  return (
    <form action='submit'onSubmit={handleSubmit}>
        <h1>Bienvenue chez nous</h1>  
        <br/>
        <h2>Connectez-vous</h2>
        <input value={name} onChange={handleChange} placeholder='Entrez votre prenom' required />
        <button>Accéder à votre espace</button>
    </form>
  )
}


