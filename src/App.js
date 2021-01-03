import { useState, useEffect } from 'react';
import Cat from './components/Cat';
import './App.css';

function App() {

  // Create Dog state variable
  const [cats, setCats] = useState(null);

  // Fetch the dogs

  const fetchCats = () => {

    const url = 'https://aws.random.cat/meow'

    fetch(url)
    .then((response) => response.json())
    .then((jsonData) => {

      setCats(jsonData);

    })

  };


  // The useEffect is actually performing the fetchDogs method and returning it to the state of dogs

  useEffect(() => {
    fetchCats();
  }, []);

  // handleDog will invoke setDogs to run the fetch again an retrieve a new dog - the state will change and the page wil refresh

  const handleCat = () => {
    setCats(fetchCats);
    
  }

  // We need this statement to say if there are no dogs initially then return null otherwise will receive an error after the first fetch 

  if(!cats) return null;

  // dogs.message is assigned to the dog prop on the left and contains the url from the object. On clicking of the button, handleDog is invoked and another dog is shown on screen

  return (
   <>
      <h1>Random Hecker Generator: Here's yer kitty</h1>
      <Cat cat={cats.file} />
      <button onClick={handleCat}> Another Kitter </button>
   
   </>
  );
}

export default App;
