import React, {useState, useEffect} from 'react';
import DisplayFilm from '../components/DisplayFilm';
import FavouriteList from '../components/FavouriteList';

const FilmContainer = () => {

    const [films, setFilms] = useState([]);

    useEffect (() => {
        loadFilms();
    }, [])

    const loadFilms = function () {
        fetch('https://ghibliapi.herokuapp.com/films')
        .then(res => res.json())
        .then(films => setFilms(films))
        .catch(err => console.error);

    }

    return (
        <>
        <h1>Studio Ghibli Films</h1>
        <DisplayFilm films={films}/>
        </>
    )
}

export default FilmContainer;