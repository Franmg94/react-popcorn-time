import { useState } from "react";
import movies from "../data/movies.json";
import Movie from "./Movie";

function Main(){

    const [moviesToDisplay, setMoviesToDisplay] = useState(movies);

    const deleteMovie = (movieId) => {
        const newList = moviesToDisplay.filter( (movieDetails) => {
            return movieDetails.id !== movieId;
        });
        
        // moviesToDisplay = newList; // NEVER UPDATE STATE DIRECTLY !!
        // moviesToDisplay.pop(); // NEVER UPDATE STATE DIRECTLY !!
        setMoviesToDisplay(newList);
    }

    let message = "";
    if(moviesToDisplay.length){
        message = <h1>Number of movies: {moviesToDisplay.length}</h1>
    } else {
        message = <h1>Sorry, no movies to display</h1>
    }

    return (
        <>

            {message}

            {moviesToDisplay.map(function(movieObj){
                return (
                    <Movie 
                        key={movieObj.id}
                        movieDetails={movieObj}
                        title="hello"
                        callbackToDelete={deleteMovie}
                        />
                )
            })}

        </>
    );
}

export default Main;