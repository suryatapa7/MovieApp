import Hero from "./Hero";
import { Link } from "react-router-dom";
import noImage from "../noImage.jpg"

const MovieCard = ({ movie }) => {

    const PosterUrl = `${movie.Poster}`

    const detailUrl = `/movies/${movie.imdbID}`

    return (
        <div className="col-lg-3 col-md-3 col my-4">
            <div className="card">
                {PosterUrl !== "N/A" ? (
                    <img src={PosterUrl} className="card-img-top" alt={movie.Title} />
                ) : (
                    <img src={noImage} className="card-img-top" alt={movie.Title} />
                )}
                {/* <img 
                   className="card-img-top" 
                   src={PosterUrl} 
                   alt={movie.Title} 
                /> */}
                <div className="card-body">
                    <h5 className="card-title">{movie.Title}</h5>
                    <Link to={detailUrl} className="btn btn-primary">Show details</Link>
                </div>
            </div>
        </div>
    )
}


const SearchView = ({ keyword, searchResults }) => {
    const title = `You're searching for ${keyword}`
    const resultsHtml = searchResults.map((obj, i) => {
        // return <div key={`${obj.Title}-${i}`}>{obj.Title}</div>
        return <MovieCard movie={obj} key={i} />
    })
    // console.log(searchResults, "are the search results");
    return (
        <>
            {keyword ? <Hero text={title} /> : <Hero text="Search for a movie" />}
            {/* <Hero text={title}/> */}

            {resultsHtml && keyword ? (
                <div className="container">
                    <div className="row">
                        {resultsHtml}
                    </div>
                </div>
            ) : (
                <></>
            )}

            {
                resultsHtml.length === 0 && keyword ? (
                    <div className="container">
                        <div className="row">
                            <div className="col-10 offset-1">
                                <p className="lead text-center mt-5 fs-1">No results found for: <strong>{keyword}</strong>.
                                </p>
                                <p className="lead text-center fs-1">Please try again.</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <></>
                )}

        </>
    )
}

export default SearchView;