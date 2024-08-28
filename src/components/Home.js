import Hero from "./Hero";

const Home = () => {
  return (
    <>
      <Hero text="Welcome to React 101!" />
      {/* <h1>Hello World from react 201!</h1> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              This is a movie browser app built with React. In this app, user can search and view details of movies. The data is fetched from the OMDB API. The user can search movies by title. The app also displays the top 10 movies by relevance. One thing to notice here is that:-
            </p>
            <ul>
              <li>This API give results after you type three letters</li>
              <li>There is a 404 page</li>
              <li>Sometimes a search result doesn't have an image so an alternate image is used in this case.</li>
              <li>There is a handler if there are no search results</li>
              <li>The search button in the navigation works and you can see query being passed after clicking on the button.</li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default Home;