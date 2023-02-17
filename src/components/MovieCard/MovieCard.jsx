import React from "react";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function MovieBox({movie}) {
  const year = movie.released_on
  return (
    <Box
      sx={{ minWidth: 275 }}
    >
      <CardContent>
        <Typography variant="h2" sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {movie.title} | | {movie.length}
        </Typography>
        <Typography variant="h5" component="div">
          IMDB Rating: {movie.imdb_rating}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {movie.overview}
        </Typography>
        <Typography variant="body2">
          Director: {movie.director}
          <br />
          Cast: {movie.cast.map(i => <span key={i}>i</span>)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">View</Button>
      </CardActions>
    </Box>
  )
}

export default MovieBox;