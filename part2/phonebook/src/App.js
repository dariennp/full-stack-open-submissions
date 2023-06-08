import { useState } from 'react'
import ShowPerson from './ShowPerson'
import PersonForm from './PersonForm'
import Filter from './Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number:'040-12345',
    }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter]= useState('')

  let personsToShow=persons.filter(person => person.name.toLowerCase().includes(newFilter))
  

  const addName = (event) => {
    event.preventDefault()
    const newPerson = {
      name: newName,
      number: newNumber,
    }

    if (persons.find(person => person.name === newPerson.name))
    {
      window.alert(`${newName} has already been added`)
    }
    else
    {
      setPersons(persons.concat(newPerson))
      setNewName('')
      setNewNumber('')
    }

  }

  const handleName = (event) => {
    setNewName(event.target.value)
  }

  const handleNumber = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>

      <Filter newFilter={newFilter} handleFilter={handleFilter} />
      
      <h2> Add new person </h2>
      <PersonForm addName={addName} newName={newName} handleName={handleName} newNumber={newNumber} handleNumber={handleNumber} />

      <h2>Numbers</h2>
      <ShowPerson personsToShow={personsToShow}/>
    </div>
  )
}

export default App