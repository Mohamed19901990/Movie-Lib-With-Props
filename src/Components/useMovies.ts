/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { useState } from "react";

const useMovies = () => {
  const [movies, setMovies]: any = useState([]);
  const [moviesFiltred, setMoviesFiltred]: any = useState([]);
  const [toggleMovie, setToggleMovie]: any = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const test = "data test";
  const [moviesShow, setMoviesShow]: any = useState([]);
  const movieArray = [...movies];

  const setMovieArray = (moovies: any) => {
    setMovies([...movies, moovies]);
  };

  /////////////////////  REMOVE  //////////////////////////
  const remove = (e: any) => {
    console.log("Hallo from remove up");
    setMovies([...movies.filter((movies: any) => movies.id !== e.target.id)]);
    console.log("Hallo from remove between");
    setMoviesFiltred([
      ...moviesFiltred.filter(
        (moviesFiltred: any) => moviesFiltred.id !== e.target.id
      ),
    ]);
    console.log("Hallo from remove down", moviesFiltred);
  };

  /////////////////////  CLEAR FILTER //////////////////////////
  const clearHandler = (event: any) => {
    event.preventDefault();
    // MovieFilterArray(originalMovies);
    setButtonDisabled(false);
    setToggleMovie(false);
  };

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

    event.target.rating2.value = "";
    event.target.title2.value = "";
  };

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

  return {
    remove,
    movies,
    test,
    moviesFiltred,
    toggleMovie,
    clearHandler,
    filterHandler,
    buttonDisabled,
    moviesShow,
    submitHandler,
    movieArray,
  };
};

export { useMovies as default };
