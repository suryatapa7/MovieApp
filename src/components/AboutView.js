import Hero from "./Hero";
const AboutView = () => {
  return (
    <>
      <Hero text="About Me" />
      {/* <h2>About Us</h2> */}
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 my-5">
            <p className="lead">
              Hey a fellas! How are you all?? I am Suryatapa Bhattacharya(Tuli) 🙏currently in learning phase of my career. I really want to dig dive into Web Development so i went over to Udemy and found out Kalob Taulien course! It's feels great to learn and i have applied some of the concepts of React in this project! Also I am from India so here the "The Movie Database (TMDB)" does not work, so i decided to work with another movie DB API i.e. "OMDb API - The Open Movie Database".
              So enjoy and keep searching your favourite movies🎬!

            </p>
          </div>
        </div>
      </div>

    </>
  )
}

export default AboutView;