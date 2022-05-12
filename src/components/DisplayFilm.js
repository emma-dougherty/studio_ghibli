import React from 'react';
import Film from './Film';

const DisplayFilm = ({films}) => {

    const filmItems = films.map((film, index) => {
        return <Film film={film} key={index} />
    })
    return (
        <>
            {filmItems}
            
        </>
    )
}

export default DisplayFilm;