import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./request";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
     <Banner />
     <Row 
      title="NETFLIX ORIGINALS" 
      fetchURL={requests.fetchNetflixOriginals}
      isLargeRow={true}
     />
     <Row title="Trending Now" fetchURL={requests.fetchTrending}/>
     <Row title="Top Rated" fetchURL={requests.fetchTopRated}/>
     <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
     <Row title="Horror Movies" fetchURL={requests.fetchHorroMovies}/>
     <Row title="Documentaries" fetchURL={requests.fetchDocumentaries}/>
     
    
    </div>
  );
  
}

export default App;
