import React, { useEffect, useState } from 'react';
import axios from './axios'
import "./Row.css"

function Row({title, fetchUrl}) {
  const [movies, setMovies] = useState ([]);

  // snippet of code which runs based on specific conditions/variable
  useEffect(() => {

  }, [])

  return (
    <div>
        <h2>{title}</h2>
 
    </div>
  )
}

export default Row