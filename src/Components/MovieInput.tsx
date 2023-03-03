/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

function MovieInput({ onSubmit }: any) {
  return (
    <Box sx={{ width: 180 }}>
      <form onSubmit={onSubmit} style={{ width: "150px" }}>
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
