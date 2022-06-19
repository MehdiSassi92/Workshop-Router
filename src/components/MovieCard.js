import React from "react";
import { Rate } from "../components/Rate";
import { Link } from "react-router-dom";

export const MovieCard = ({ movie }) => {
  return (
    <div>
      <img
        style={{
          width: "18rem",
          borderRadius: "10px",
          border: "2px solid red",
          background: "rgb(194, 4, 4)",
          height: "30rem",
        }}
        src={movie.image}
        alt="pic"
      />
      <div>
        <Rate rating={movie.rating} />
        <span>{movie.name}</span>
        <br />
        <span>{movie.date}</span>
        <br />
        <Link to={{
          pathname: "/movies/" + movie.id,
          state:{link:movie.link, description:movie.description}
        }}>
        <button>More Details</button>
        </Link>
        
      </div>
      <br />
      <br />
    </div>
  );
};
