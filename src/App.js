// Importing Libraries and components
import React from "react";
import { useState } from "react";
import AnimalShow from "./AnimalShow";

// declaring getAnimals function and return a random animal array
function getRandomAnimal() {
  const animals = ["bird", "cow", "cat", "dog", "gator", "horse"];

  return animals[Math.floor(Math.random() * animals.length)];
}

const App = () => {
  // craeting a state called animals and setter fn called setAnimals
  const [animals, setAnimal] = useState([]);

  // rendering animal
  const renderdAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
    <>
      <button onClick={() => setAnimal([...animals, getRandomAnimal()])}>
        Add Animal
      </button>
      <div>{animals}</div>
    </>
  );
};

export default App;
