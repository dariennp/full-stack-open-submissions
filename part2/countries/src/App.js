import { useState,useEffect } from "react"
import axios from 'axios'

function App() {
  const [countries,setCountries]=useState([])
  const [single,setSingle]=useState(null)
  const [newFilter, setNewFilter]= useState('')
  const [message,setMessage] = useState(null)

  const grabAll = () => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then(response => {
        const matches=response.data.map((country => country))
        setCountries(matches)
      })
  }

  useEffect(grabAll,[])

  const countriesToShow=countries.filter(country => country.name.common.toLowerCase().includes(newFilter))
  
  
  useEffect( () => {
    const updatedSingle = countriesToShow[0]
    setSingle(updatedSingle)
  },[countriesToShow])

  const handleChange = (event) => {
    setNewFilter(event.target.value)
    setMessage(null)
  }

  const handleMessage = (country) => {setMessage(country)}

  const xyz = (c) => {
    return(

    <div>
          <h1> {c.name.common} </h1>
          <p> Capital: {c.capital}  </p>
          <p> Area: {c.area}  </p>
          <h3> Languages spoken: </h3>
          <ul>
          {Object.values(c.languages).map(language => 
            <li key = {language}> {language}</li>)}
          </ul>
          <img src={c.flags.png} alt="flag"/>
        </div>
    )
  }
  
  return (
    
    <div>
      {console.log(countriesToShow)}
      {console.log("message",message)}
      <h1>find countries: </h1>
      <input value={newFilter} onChange={handleChange}/> 
      <br/>

      <ul>
      { (1 < countriesToShow.length && countriesToShow.length <11) &&
      (
        countriesToShow.map(country =>
          <div key={country.name.common}>
          <li> {country.name.common} </li> 
          <button onClick={() => handleMessage(country)}> Show </button>
          </div>
          )
      )}

      {countriesToShow.length === 1 && (
        xyz(single)
       )} 
      {countriesToShow.length >10 && (<> <li> too many </li></>)} 
      {message !== null && (
        xyz(message)
      )}
      </ul>
    </div>
    
  );
}

export default App;
