//we have a movies.json file lol
import React, {useState, useEffect} from 'react';
import '../styles.css';
import MovieCard from './MovieCard';

export default function MoviesGrid() {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");//workings of that search bar
    const m = ["fat", "nuts"];
    useEffect(() => {
        fetch("movies.json")//wait until it's ready
        .then(response => response.json())
        .then(data => setMovies(data))
        //setMovies(m);
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));

    //const age=20;
    return (
        <div>
        <input type="text" 
        className="search-input" 
        placeholder="fat nuts" 
        value={searchTerm} 
        onChange={handleSearchChange}></input>
        <div className='movies-grid'>
            {filteredMovies.map(movie => (//here we put in the pics of the movies
                    <MovieCard movie={movie} key={movie.id}></MovieCard>
                ))
            }
        </div>
        </div>
    )
}

//to work with that search bar...