import React, { useState } from "react";
import {useEffect} from "react";
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from "./MovieCard";
const API_URL = "http://www.omdbapi.com?apikey=8653e11f";
const App = ()=>{

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')


     
    const searchMovies = async (title)=>{
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        
        setMovies(data.Search);
        console.log(data.Search)

    }
     
    const movie1 = 
        {
            "Title": "Super Size Me",
            "Year": "2004",
            "imdbID": "tt0390521",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMTYyOTk4MjIxOF5BMl5BanBnXkFtZTcwMzk1NTUyMQ@@._V1_SX300.jpg"
          }

    useEffect(()=>{
        searchMovies("spiderman")
    },[])
    return (
        <div className="app">
            <h1>Movies Hub</h1>

            <div className="search">
                <input
                    placeholder="Search your movie"
                    value = {searchTerm}
                    onChange={
                        (e)=>{ 
                            setSearchTerm(e.target.value)
                        }
                    }
                />
                <img src={SearchIcon}
                    alt="search"
                    onClick={
                        ()=>{
                            searchMovies(searchTerm)
                        }
                    }
                />
            </div>

              {
                movies?.length > 0
                ? (
                <div className="container">
                   
                        {
                            movies.map((m) =>{
                               return <MovieCard movie={m}/>
                            })
                        }

                    <MovieCard movie={movie1}/>
                </div>
                ):(
                    <div className="empty">
                        <h2>No Movies Found</h2>
                    </div>
                )
              }      


            
        </div>
    );
}

export default App;

// 8653e11f