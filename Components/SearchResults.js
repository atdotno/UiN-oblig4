import React from "react";

const SearchResults = (props) => {
    return (
        <>
            {props.movies.map((movie, index)=> (
            <div className="MovieCard">
                <img src={movie.Poster}></img>
                <section>
                <p>
                    <h1>{movie.Title}</h1>
                    Release year: {movie.Year}      
                    {movie.Score}

                </p>

                </section>

            </div>
            ))}
        </>
    )
}

export default SearchResults;