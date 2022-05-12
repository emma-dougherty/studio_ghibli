import React, {useState, useEffect} from 'react';
import FavouriteList from '../components/FavouriteList';
import DisplayFilm from '../components/DisplayFilm';

import FilmDetail from '../components/FilmDetail';


const FilmContainer = () => {

    const [films, setFilms] = useState([]);
    const [selectedFilm, setSelectedFilm] = useState (null)
    const [favouriteFilms, setFavouriteFilm] = useState([])

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

    const onFavouriteClick = function (film){
        const copyOfFavouriteFilms = [...favouriteFilms, film]
        setFavouriteFilm(copyOfFavouriteFilms)
    }

    const onFilmSelected = function (film) {
        setSelectedFilm(film)
    }

    return (
    
        <>
        <h1>Studio Ghibli Films</h1>
        {selectedFilm ? <FilmDetail selectedFilm={selectedFilm}/> : null}
        <div className="films-list">
        <DisplayFilm films={films} onFilmClick={onFilmClick}/>
        <FavouriteList films={films} onFavouriteClick={onFavouriteClick}/>
        </div>
        
    
        </>
    )
}

export default FilmContainer;