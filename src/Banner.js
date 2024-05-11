import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "./axios";
import requests from "./Requests";
function Banner() {
  const Alert = () => {
    alert("It's a test APP!");
  };

  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  // console.log(movie);

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        //import img from api
        backgroundPosition: "center center",
      }}
    >
      <div className="bannerContents">
        <h1 className="bannerTitle">
          {movie?.title || movie?.name || movie?.original_name}
          {/* import title or name film */}
        </h1>
        <div className="bannerButtons">
          <button onClick={Alert} className="bannerButton">
            Play
          </button>
          <button className="bannerButton">My List</button>
        </div>
        <h1 className="bannerDescription">{truncate(movie?.overview, 150)}</h1>
        {/* import film description*/}
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
