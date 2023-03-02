/* Copyright (c) 2023 CLOUDPILOTS Software & Consulting GmbH */

import { Box, Button, Card } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const MovieShow = ({
  setMoviesFiltred,
  setMovies,
  movies,
  toggleMovie,
  moviesFiltred,
}: any) => {
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

  if (toggleMovie === true)
    return (
      <Box
        style={{
          display: "flex",
          width: "100%",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          style={{
            width: "100%",
          }}
        >
          <Box
            sx={{
              justifyContent: "center",
              display: "02marflex",
            }}
          >
            MovieCard List
          </Box>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              mt: 4.5,
            }}
          >
            {moviesFiltred.map((value: any, index: any) => (
              <span key={index}>
                <Card
                  sx={{
                    width: 275,
                    ml: 0.5,
                    mb: 0.5,
                    mt: 0.5,
                    mr: 0.5,
                    backgroundColor: "black",
                    color: "white",
                    borderRadius: "5%",
                  }}
                  variant="outlined"
                >
                  <CardContent>
                    <Typography sx={{ mb: 1 }} variant="body2">
                      Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp;{value.title}
                    </Typography>
                    <Typography sx={{ mb: 1 }} variant="body2">
                      Description &nbsp;:&nbsp;&nbsp;{value.description}
                    </Typography>
                    <Typography sx={{ mb: 1 }} variant="body2">
                      PosterURL&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{value.posterURL}
                    </Typography>
                    <Typography variant="body2">
                      Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                      &nbsp;{value.rating}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      variant="contained"
                      id={value.id}
                      onClick={remove}
                      size="small"
                      sx={{
                        height: "26px",
                        "&:hover": { backgroundColor: "#d33e3e8d" },
                      }}
                    >
                      Remove
                    </Button>
                  </CardActions>
                </Card>
              </span>
            ))}
          </Box>
        </Box>
        <Box
          style={{
            justifyContent: "center",
          }}
        >
          <Box
            style={{
              justifyContent: "center",
              alignItems: "flex-start",
              display: "flex",
              width: "100px",
            }}
          >
            Movies List
          </Box>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              display: "flex",
              width: "100px",
              flexDirection: "column",
              mt: 5,
              backgroundColor: "lightblue",
            }}
          >
            {moviesFiltred.map((value: any) => (
              <p>{value.title}</p>
            ))}
          </Box>
        </Box>
      </Box>
    );

  return (
    <Box
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <Box
        style={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            justifyContent: "center",
            display: "02marflex",
          }}
        >
          MovieCard List
        </Box>
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            mt: 4.5,
          }}
        >
          {movies.map((value: any, index: any) => (
            <span key={index}>
              <Card
                sx={{
                  width: 275,
                  ml: 0.5,
                  mb: 0.5,
                  mt: 0.5,
                  mr: 0.5,
                  backgroundColor: "black",
                  color: "white",
                  borderRadius: "5%",
                }}
                variant="outlined"
              >
                <CardContent>
                  <Typography sx={{ mb: 1 }} variant="body2">
                    Title&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    &nbsp;{value.title}
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body2">
                    Description &nbsp;:&nbsp;&nbsp;{value.description}
                  </Typography>
                  <Typography sx={{ mb: 1 }} variant="body2">
                    PosterURL&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;{value.posterURL}
                  </Typography>
                  <Typography variant="body2">
                    Rating&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;:
                    &nbsp;{value.rating}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    variant="contained"
                    id={value.id}
                    onClick={remove}
                    size="small"
                    sx={{
                      height: "26px",
                      "&:hover": { backgroundColor: "#d33e3e8d" },
                    }}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </span>
          ))}
        </Box>
      </Box>
      <Box
        style={{
          justifyContent: "center",
        }}
      >
        <Box
          style={{
            justifyContent: "center",
            alignItems: "flex-start",
            display: "flex",
            width: "100px",
          }}
        >
          Movies List
        </Box>
        <Box
          sx={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex",
            width: "100px",
            flexDirection: "column",
            mt: 5,
            backgroundColor: "lightblue",
          }}
        >
          {movies.map((value: any) => (
            <p>{value.title}</p>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default MovieShow;
