import React, { useState } from 'react';



let App = () => {
    const [email, setEmail] = useState('');
    const[response, setResponse] = useState('');
 
      const [chirp, setChirp] = useState([
        {email: 'lukeissmelly@tootmail.com', response: 'nice to meet you luke'},
        {email: 'mynameisjeff@gmail.com', response: 'nice to meet you jeff'},
        {email: 'usetheforce@starwarsmail.com', response: 'just not on me!'},

      ]);

      const handleClick = e => {
        e.preventDefault();

        const thisChirp = {  
          theEmail: email,
          theResponse: response
        }
        setChirp([...chirp, thisChirp])
      }
 
        return (
          <>
          <form className="form-group container row col-6 mx-auto border p-3">
          
         <input type = "text" placeholder = "type your email.." value = {email} onChange = {e => 
            setEmail(e.target.value)
          } />
      
          <input type = "text" placeholder = "type your response.." value = {response} onChange = {e => 
            setResponse(e.target.value)
          }/>

          <button className = "btn btn-primary" type = "submit" value = "Post chirp" onClick = { e => handleClick(e)}> Submit this please </button>
         
          </form>
          {chirp.map((oneChirp, i) => {
            return (
              <> 
              <h1>{oneChirp.email}</h1>
              <h3>{oneChirp.response}</h3>
              </>
            )
          })}
          </>
        )

 
 
 
 
 
 
  }

  export default App;