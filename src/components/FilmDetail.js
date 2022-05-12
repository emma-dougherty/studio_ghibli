import React from 'react';
import FilmContainer from '../containers/FilmContainer'

const FilmDetail = ({selectedFilm}) => {

    return (
        <div>
            <p>{selectedFilm.title}</p>
            <p>{selectedFilm.description}</p>
            <p>{selectedFilm.release_date}</p>
            <p>{selectedFilm.director}</p>
            <p>{selectedFilm.rt_score}</p>
        </div>
    )
};

export default FilmDetail;