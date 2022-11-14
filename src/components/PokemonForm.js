import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPoke}) {
  const [name, setName] = useState("")
  const [hp, setHp] = useState("")
  const [front, setFront] = useState("")
  const [back, setBack] = useState("")
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          e.preventDefault()

          const newPoke = {
            name: name,
            hp: hp,
            sprites: {
              front: front,
              back: back,
            },
          }

          fetch("http://localhost:3001/pokemon", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(newPoke)
          })
            .then(res => res.json())
            .then(data => onAddPoke(data))
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
          onChange = {(e) => setName(e.target.value)}
          fluid label="Name"
          placeholder="Name"
          name="name"
          value = {name}
          />
          <Form.Input
          onChange = {(e) => setHp(e.target.value)}
          fluid label="hp"
          placeholder="hp"
          name="hp"
          value = {hp}
          />
          <Form.Input
          onChange = {(e) => setFront(e.target.value)}
          fluid label="Front Image URL"
          placeholder="url"
          name="frontUrl"
          value = {front}
          />
          <Form.Input
            onChange = {(e) => setBack(e.target.value)}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value = {back}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
