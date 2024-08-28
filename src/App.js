import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import MovieView from './components/MovieView';
import AboutView from './components/AboutView';
import SearchView from './components/SearchView';
import PageNotFound from './components/404View';
import { Switch, Route } from 'react-router-dom';
// import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';

//api key:-http://www.omdbapi.com/?i=tt3896198&apikey=36a8fd99&s=titanic

function App() {

  const [searchResults, setSearchResults] = useState([]);
  // const [searchText, setSearchText] = useState( "searching for ..." );
  const [searchText, setSearchText] = useState("");


  // console.log(searchText, "is the default")
  // setTimeout(() => {
  //   setSearchText("New Text")
  //   console.log(searchText, "is the new text")
  // },2000)

  useEffect(() => {
    if (searchText) {
      // console.log(searchText, "is the search text")
      fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=36a8fd99&s=${searchText}`)
        .then(response => response.json())
        .then(data => {
          if (data.Response === "True") {
            setSearchResults(data.Search);
          } else {
            setSearchResults([]);
          }
        });
    }
  }, [searchText])



  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText} />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route component={PageNotFound} />
      </Switch>
      {/* <Router>
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutView />} />
       </Routes>
      </Router> this will work on react version 20  and react router v6 & up*/}
    </div>
  );
}

export default App;













//So I just want to clarify the path searchText takes.

// 1: searchText gets set in the input tag in Navbar with value

// 2: it then comes out of Navbar through the Navbar tag searchText prop

// 3: gets set in  const [ searchText, setSearchText ] = useState('') ?

// 4: goes into SearchView through the keyword prop

// 5: gets set into title in SearchView

//When we use useState() we're assigning a function to set the searchText, and a variable to hold the searchText value.

//The setSearchText function can then also trigger other react hooks, which is the real power here.