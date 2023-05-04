const MoviePost = ({search}) => {
    const results = search.map(movie => <li key={movie.id} movie={movie} />)
    const content = results?.length ? results : <h2>No Search Results Found!</h2>
    return(
        <main>{content}</main>
    )
}
export default MoviePost;