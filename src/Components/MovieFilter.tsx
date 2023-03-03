/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import Button from "@mui/material/Button";
import useMovies from "./useMovies";

function MovieFilter() {
  const { filterHandler, buttonDisabled, clearHandler } = useMovies();

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
