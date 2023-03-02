/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import React from "react";

function MovieList({ movies }: any) {
  const movieArray = [...movies];

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
