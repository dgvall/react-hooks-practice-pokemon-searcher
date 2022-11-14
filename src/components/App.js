import React, {useState, useEffect} from "react";
import PokemonPage from "./PokemonPage";

function App() {
  const [pokemon, setPokemon] = useState([])
  const [filterBy, setFilterBy] = useState("")

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then(res => res.json())
      .then(data => setPokemon(data))
  }, [])

  function handleAddPoke(newPokeObj) {
    const newPokeArray = [...pokemon, newPokeObj]
    setPokemon(newPokeArray)
  }

  const displayedPokemon = pokemon
    .filter((p) => p.name.toLowerCase().includes(filterBy.toLowerCase()))

  return (
    <div className="App">
      <PokemonPage
      pokemon = {displayedPokemon}
      setFilterBy = {setFilterBy}
      onAddPoke = {handleAddPoke}
      />
    </div>
  );
}

export default App;
