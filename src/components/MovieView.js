import Hero from "./Hero";
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import noImage from "../noImage.jpg"


const MovieView = () => {
    const { id } = useParams()
    // console.log(id)
    const [movieDetails, setMovieDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        // console.log("Make an Api Request", id); http://www.omdbapi.com/?i=tt0848228&apikey=36a8fd99
        fetch(`http://www.omdbapi.com/?i=${id}&apikey=36a8fd99`)
            .then(response => response.json())
            .then(data => {
                //   setTimeout(() => {
                //     setMovieDetails(data)
                //     setIsLoading(false)
                //   }, 2000)
                setMovieDetails(data)
                setIsLoading(false)
            })
    }, [id])

    function renderMovieDetails() {
        if (isLoading) {
            return <Hero text="Loading..." />
        }
        if (movieDetails) {

            //TODO: Deal with a possible missing image
            // return <Hero text={movieDetails.Title} />
            const posterPath = `${movieDetails.Poster}`
            const backdropUrl = `${movieDetails.Poster}`

            return (
                <>
                    <Hero text={movieDetails.Title} backdrop={backdropUrl} />
                    <div className="container my-5">
                        <div className="row">
                            <div className="col-md-3">
                                {/* <img src={posterPath} alt="..." className="img-fluid shadow rounded"/> */}
                                {posterPath !== "N/A" ? (
                                    <img src={posterPath} className="card-img-top" alt="..." />
                                ) : (
                                    <img src={noImage} className="card-img-top" alt="..." />
                                )}
                            </div>
                            <div className="col-md-9">
                                <h2>{movieDetails.Title}</h2>
                                {movieDetails.Plot && <p className="lead">Description: {movieDetails.Plot}</p>}
                                {movieDetails.imdbRating && <p className="lead">Rating: {movieDetails.imdbRating}</p>}
                                {movieDetails.Released && <p className="lead">Released Date: {movieDetails.Released}</p>}
                                {movieDetails.Language && <p className="lead">Language: {movieDetails.Language}</p>}
                            </div>
                        </div>
                    </div>


                </>
            )
        }
    }

    return renderMovieDetails();


    //   return (
    //     <>
    //       <Hero text={movieDetails.Title} />
    //     </>
    //   )
};

export default MovieView;