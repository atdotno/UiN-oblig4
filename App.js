import { useState } from 'react';
import { useEffect } from 'react';
import './App.css';
import SearchBox from './Components/SearchBox';
import ListHeader from './Components/ListHeader';
import SearchResults from './Components/SearchResults';


  const App = () => {
   
    const [movies, setMovies] = useState([]);
    const [searchValue, setSearchValue] = useState('James Bond');
    
       
    const getMovieRequest = async(searchValue) => {
        const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=985ce7f3`;

        const response = await fetch(url);
        const responseJson = await response.json();
        if(responseJson.Search) {
        setMovies(responseJson.Search);
        }
    };

    useEffect(() => {
      getMovieRequest(searchValue);   
    }, [searchValue]);  
  

    return (
        <div className='container'>            
            <div className='row'>            
            <ListHeader heading='Movies'/>             
            <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />          
            </div>
            <div className='row'>
            <SearchResults movies={movies} />
            </div>
        </div>           
    )};    
      
    export default App;            


