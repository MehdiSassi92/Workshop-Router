import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
import { useNavigate, useParams } from "react-router-dom";
import { MovieData } from "../components/MovieData";
import { useState } from "react";

const MovieDescription = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [movie] = useState(MovieData.find((elem) => elem.id === id));

  return (
    <div> 
      <br />
      <article style={{ padding: "50px 100px 50px 100px" }}>
        <h5 style={{ textAlign: "center" }}>{movie.name}</h5>
        <YoutubeEmbed embedId= {movie.videoEmbedId} />
        <p>
         {movie.description}
        </p>
        <button onClick={() => navigate(-1)}>Back to Home</button>
      </article>
    </div>
  );
};

export default MovieDescription;
