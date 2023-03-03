/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import Button from "@mui/material/Button";

function MovieFilter({ onSubmit, buttonDisabled, onClick }: any) {
  return (
    <div style={{ display: "flex", maxWidth: "100%" }}>
      <div>
        <form onSubmit={onSubmit} style={{ width: "150px" }}>
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
          onClick={onClick}
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
