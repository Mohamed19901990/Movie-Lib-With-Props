/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { useState } from "react";

import Button from "@mui/material/Button";

function MovieFilter({ setMoviesFiltred, movies, setToggleMovie }: any) {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  /////////////////////  Filter  /////////////////////////////
  const filterHandler = (event: any) => {
    event.preventDefault();
    setButtonDisabled(true);
    setToggleMovie(true);
    setMoviesFiltred(
      ...[
        movies.filter(
          (v: any) =>
            v.title === event.target.title2.value ||
            v.rating === event.target.rating2.value ||
            (event.target.rating2.value === "" &&
              event.target.title2.value === "")
        ),
      ]
    );
    // MovieFilterArray(...[movies.filter((v:any)=>(
    //     (v.title===event.target.title2.value || v.rating===event.target.rating2.value || (event.target.rating2.value==='' && event.target.title2.value==='')))
    //     )])
    event.target.rating2.value = "";
    event.target.title2.value = "";
  };

  /////////////////////  CLEAR FILTER //////////////////////////
  const clearHandler = (event: any) => {
    event.preventDefault();
    // MovieFilterArray(originalMovies);
    setButtonDisabled(false);
    setToggleMovie(false);
  };

  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <div>
        <form onSubmit={filterHandler} style={{ width: "150px" }}>
          <input type="text" name="title2" placeholder="Film title" />
          <input type="text" name="rating2" placeholder="Film rating" />
          <Button
            sx={{
              "&:hover": { backgroundColor: "black" },
              background: "#151516aa",
              mb: 1,
              mt: 1,
              height: 25,
            }}
            disabled={buttonDisabled}
            variant="contained"
            type="submit"
            size="small"
          >
            Filter Movie
          </Button>
        </form>
        <Button
          sx={{
            "&:hover": { backgroundColor: "black" },
            background: "#151516aa",
            mb: 1,
            height: 25,
          }}
          disabled={!buttonDisabled}
          onClick={clearHandler}
          variant="contained"
          type="button"
          size="small"
        >
          Clear
        </Button>
      </div>
    </div>
  );
}

export default MovieFilter;
