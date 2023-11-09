import { useState } from 'react';
import movies from "./data/movies.json";
import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

  const deleteMovie = (movieId) => {
    const newList = moviesToDisplay.filter((movieDetails) => {
      return movieDetails.id !== movieId;
    });

    // moviesToDisplay = newList; // NEVER UPDATE STATE DIRECTLY !!
    // moviesToDisplay.pop(); // NEVER UPDATE STATE DIRECTLY !!
    setMoviesToDisplay(newList);
  }


  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />
      <Main moviesArr={moviesToDisplay} callbackToDelete={deleteMovie}  />
      <Footer />
    </>
  )
}

export default App
