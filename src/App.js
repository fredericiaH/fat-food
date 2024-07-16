
import { useState } from 'react';
import './App.css';

function App() {
//States
const [name, setName] = useState("");
//Components
const handleChange = (e) =>{
  e.preventDefault();
  setName(e.target.value);
  
}


const handleSubmit = (e) =>{
  e.preventDefault();
  alert("Bonjour "+ name +".");
  setName("");

}

//Render
return(
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

export default App;
