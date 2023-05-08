import './MovieList.css'
import React, { useEffect, useState} from "react"
import PopUp from './PopUp';

export const MovieList= ({movie}) => {
    //deconstructor for movie
    const {id,title,genres} = movie;
    //if image not found in public folder --- default image
    const defaultSrc = (e)=> {
        e.target.src= process.env.PUBLIC_URL + '/img/defaultImage.jpeg'
    }
    //pop up useState
    const [open, setOpen] = useState(false)
    return(
    <div className="listing">
        <div className="poster-listing">
            <img className="poster-img" onError = {defaultSrc} src={process.env.PUBLIC_URL + '/img/'+ id + '.jpeg'}/>
        </div>
        <div className="title-det">
            <span className="movie-title">{title}</span>
            <br></br>
            <div className='view-details'>
                <button onClick= {()=>setOpen(true)} className="details-button" title={genres}>Details</button>
            </div>
            <PopUp trigger={open} setTrigger={setOpen}>
                <h3 className='popup-title'>{title.toUpperCase()}</h3>
                <p className='popup-genres'>{genres.toString().toUpperCase()}</p>
            </PopUp>
        </div>
    </div>
    )
    
}

export default MovieList;
