import React from "react";
import { MovieCard } from "../components/MovieCard";

export const MovieList = ({ moviesData, textSearch, rateSearching }) => {
  return (
    <div>
      {moviesData
        .filter(
          (el) =>
            el.name.toLowerCase().includes(textSearch.toLowerCase().trim()) &&
            el.rating >= rateSearching
        )
        .map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
    </div>
  );
};
