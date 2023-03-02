/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";

function MovieInput({ setMovieArray }: any) {
  const [moviesShow, setMoviesShow]: any = useState([]);

  /////////////////  SUBMIT NEW MOVIE  ///////////////////////
  const submitHandler = (e: any) => {
    e.preventDefault();
    console.log("SubmitHandler");

    //////// IF FORM EMPTY PROMPT ALERT ////////
    if (
      e.target.title.value === "" ||
      e.target.description.value === "" ||
      e.target.posterURL.value === "" ||
      e.target.rating.value === ""
    ) {
      window.confirm("Please Fill All The Fields To Add Your Movie");
      e.target.title.value = "";
      e.target.rating.value = "";
      e.target.description.value = "";
      e.target.posterURL.value = "";
    } //// IF NOT, THEN FETCH DATA /////
    else {
      setMoviesShow([
        ...moviesShow,
        {
          title: e.target.title.value,
          description: e.target.description.value,
          posterURL: e.target.posterURL.value,
          rating: e.target.rating.value,
          id: Math.random().toFixed(3),
        },
      ]);
      setMovieArray({
        title: e.target.title.value,
        description: e.target.description.value,
        posterURL: e.target.posterURL.value,
        rating: e.target.rating.value,
        id: Math.random().toFixed(3),
      });
      e.target.title.value = "";
      e.target.description.value = "";
      e.target.posterURL.value = "";
      e.target.rating.value = "";
    }
  };

  /////////////////////  REMOVE  //////////////////////////
  return (
    <Box sx={{ width: 180 }}>
      <form onSubmit={submitHandler} style={{ width: "150px" }}>
        <input type="text" name="title" placeholder="Film title" />

        <input type="text" name="description" placeholder="Film description" />
        <input type="text" name="posterURL" placeholder="Film URL" />
        <input type="text" name="rating" placeholder="Film rating" />
        <Button
          sx={{
            "&:hover": { backgroundColor: "black" },
            background: "#151516aa",
            mb: 1,
            mt: 1,
            height: 25,
          }}
          variant="contained"
          type="submit"
          size="small"
        >
          Add Movie
        </Button>
      </form>
    </Box>
  );
}

export default MovieInput;
