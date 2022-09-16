import React, { useEffect, useState } from 'react';
import MovieList from './components/MovieList';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import MovieListHeading from './components/MovieListHeading';
import SearchBox from './components/SearchBox';

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

const getMovieRequest = async(searchValue) => {
  const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=c13c024c`
  const response = await fetch (url);
  const responseJson = await response.json();

  if(responseJson.Search){
    setMovies(responseJson.Search);
  }
  
};

useEffect(() => {
  getMovieRequest(searchValue);
}, [searchValue]);

  return (
    <div className='container-fluid movie-app'>

      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading = "Movies" />
        <SearchBox searchValue = {searchValue} setSearchValue= {setSearchValue}/>
      </div>

      <div className='row d-flex align-items-center mt-4 mb-4'>
      <MovieList movies={movies}/> 
      </div>
      
    </div>
  );
}

export default App;
