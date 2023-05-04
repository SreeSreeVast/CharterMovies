import { MovieList } from "./MovieList";

const SearchBar = ({movies, setSearch}) => {
    const handleSubmit = (e) => e.preventDefault()
    const handleChange = (e) => {
        if(!e.target.value) return setSearch(movies)
        const results = movies.filter(movie => movie.title.includes(e.target.value))
        setSearch(results)
    }

    return(
        <div>
            <input type="text" placeholder="Search Movies..." onSubmit={handleSubmit} onChange={handleChange}></input>
        </div>
    )
}

export default SearchBar;