import React from 'react'

const FavouriteList =({films, onFavouriteClick}) => {

    const handleChange = function(event) {
        const film = films [event.target.value]
        onFavouriteClick(film)
    }

    // const addFilmToList = function (event) {
    //     const chosenFilm = favouriteFilms [event.target.value]
    //     onFavouriteClick(chosenFilm)
    // }

    


    const filmOptions = films.map((film, index) => {
        return <option value={index} key={index}>{film.title} </option>
    })

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value=""  selected>Favourite Films</option>
            {filmOptions}
        </select>
    )
}

export default FavouriteList;
