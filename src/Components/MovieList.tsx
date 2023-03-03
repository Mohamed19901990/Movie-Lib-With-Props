/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import useMovies from "./useMovies";

function MovieList() {
  const { movieArray } = useMovies();

  return (
    <div>
      Movies List
      {movieArray.map((value) => (
        <p>{value.title}</p>
      ))}
    </div>
  );
}

export default MovieList;
