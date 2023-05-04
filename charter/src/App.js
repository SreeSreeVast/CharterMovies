import './App.css';
import React, { useEffect, useState} from "react"
import {MovieList} from './Components/MovieList.js'

function App() {
  //useState for api of movies obj
  const [movies, setMovies] = useState([])
  //search & filter useStates
  const [search,setSearch] = useState("")
  const [searchFilter,setSearchFilter] = useState("")
  //fetch api 
  const fetchData = async() => {
    const {data} =  await fetch("https://code-challenge.spectrumtoolbox.com/api/movies/",{
        headers:{
          Authorization:"Api-Key q3MNxtfep8Gt"
        }
      }
    )
    .then((response) => response.json())
    //search & filter movie mapping
    if (search==="" && searchFilter===""){
      setMovies(data)
    }
    else if (search!=="" && searchFilter===""){
      const searchResults = movies.filter(movie => movie.title.toLowerCase().includes(search.toLowerCase()))
      setMovies(searchResults)

    }
    else if (search==="" && searchFilter!==""){
      const searchResults = movies.filter(movie => movie.genres.toString().toLowerCase().includes(searchFilter.toLowerCase()))
      setMovies(searchResults)
    }
    else if (search!=="" && searchFilter!==""){
      const searchResults = movies.filter(movie => movie.genres.toString().toLowerCase().includes(searchFilter.toLowerCase()) && movie.title.toLowerCase().includes(search.toLowerCase()))
      setMovies(searchResults)
    }
    else{
      setMovies(data)
    }
  }
  //call useEffect
  useEffect(() => {
    fetchData()
    //call api for search & filter
  }, [search,searchFilter])

    //for clearing search entry  
    const handleSearchChange = (e) => {
      if(e.key=== 'Backspace'){
        e.target.value= ""
        setSearch(e.target.value)
      }
    }
    //for clearing filter entry
    const handleFilterChange = (e) => {
      if (e.key=== 'Backspace'){
        e.target.value=""
        setSearchFilter(e.target.value)
      }
    }
  
  return (
    <div className="App">
      <div className="homepage-container">
        <header className="homepage-top">
          <h1 className="homepage-title">CHARTER MOVIES</h1>
          <div className='search'>
            <input className='search-bar'type="text" placeholder='Search Movies...' onChange={(e) => setSearch(e.target.value)} onKeyDown={handleSearchChange}/>
          </div>
          <div className='filterby'>
            <input className='search-bar' type="text" placeholder='Search Genres...' onChange={(e) => setSearchFilter(e.target.value)} onKeyDown={handleFilterChange}/>
          </div>
        </header>
      </div>
      <main className="homepage">
        {movies && movies.length > 0 ? movies.map(movie => <MovieList key={movie.id} movie={movie}/>) : <h1 className='no-results'>SORRY, NO SEARCH RESULTS FOUND! TRY AGAIN!</h1>}
      </main>
    </div>
  );
}

export default App;
