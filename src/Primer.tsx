import React from 'react'
import {bancos} from './assets/bancos.js';

function Primer() {

    const a = "22";
    console.log(a);

    //const bancos
    console.log(bancos);

    //FIND
    const getBancoByName = (country) => bancos.find ( (banco)=> banco.country===country);
    console.log(getBancoByName('Spain'));

    //PROMESA
    /*const promesa = new Promise( (resolve, reject) => {
        setTimeout( () => {
        
        
        },3000)
    });

    const apiKey = 'UPAkadtmwjWS7YnklGT1NXe8nBDqni3F';
    const peticion = fetch('https://api.giphy.com/v1/gifs/trending?api_key=' + apiKey);
    peticion
    .then( resp => resp.json() )
    .then( data =>{ console.log(data.data[0].url)})
    .catch( console.warn);*/


  return (
    
  

  <div>
        <h1> Hola Mundo</h1>
            <h2>  {a} </h2>
            <h3>Lista de Bancos</h3>
            <ul>
            {bancos.map((a) => (
                <li key={a.id}>
                    {a.id} — {a.name}
                </li>
                ))}
            </ul>

    </div>

        )
}

export default Primer
