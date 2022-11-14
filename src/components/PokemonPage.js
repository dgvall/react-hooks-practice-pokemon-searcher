import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage({pokemon, setFilterBy, onAddPoke}) {
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm
      onAddPoke = {onAddPoke}
      />
      <br />
      <Search
      setFilterBy = {setFilterBy}
      />
      <br />
      <PokemonCollection
      pokemon = {pokemon}
      />
    </Container>
  );
}

export default PokemonPage;
