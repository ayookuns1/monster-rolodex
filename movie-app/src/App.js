import React from 'react';
import './App.css';
import Row from "./Row"
import request from './requests'
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>THE WAY FORWARD</h1>
      <Row title="Netflix Original" fetchurl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now"  fetchurl={request.fetchTrending}/>
      <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies}/>
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies}/>
      <Row title="Romance Movies" fetchurl={request.fetchRomanceMovies}/>
      <Row title="Documentaries"fetchurl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;

