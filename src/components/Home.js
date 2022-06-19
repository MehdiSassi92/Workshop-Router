import React from "react";
import { useState } from "react";
import { MovieList } from "../components/MovieList";
import { MovieData } from "../components/MovieData";
import { Header } from "../components/Header";
import { Add } from "../components/Add";

export const Home = () => {
  const [textSearch, setTextSearch] = useState("");
  const [rateSearching, setRateSearching] = useState(0);
  const [movies, setMovies] = useState(MovieData);

 
  return (
    <div>
      <Header
        setTextSearch={setTextSearch}
        setRateSearching={setRateSearching}
        rateSearching={rateSearching}
      />
      <br />
      <br />
      <Add setMovies={setMovies} movies={movies} />
      <br />
      <br />
      <MovieList
        moviesData={movies}
        textSearch={textSearch}
        rateSearching={rateSearching}
      />
    </div>
  );
};
