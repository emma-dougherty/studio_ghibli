import React, {useState, useEffect} from 'react';
import DisplayFilm from '../components/DisplayFilm';
import FavouriteList from '../components/FavouriteList';
import FilmDetail from '../components/FilmDetail';

const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState (null)

    useEffect (() => {
        loadFilms();
    }, [])

    const loadFilms = function () {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(err => console.error);

    }

    const onFilmClick = function (film){
        setSelectedFilm(film)
    }

    return (
    
        <>
        <h1>Studio Ghibli Films</h1>
        {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/> : null}
        <div className="films-list">
        <DisplayFilm films={films} onFilmClick={onFilmClick}/>
        </div>
        
    
        </>
    )
}

export default FilmContainer;