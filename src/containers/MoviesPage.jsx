import React from 'react';
import { connect } from 'react-redux';
import MovieBox from '../components/MovieCard/MovieCard';
import { getMovies } from '../store/actions/actions';

function Movies({ movies, getMovies }) {
  const handleClick = () => {
    getMovies()
  }

  return (
    <div>
      {movies && movies.map(movie => {
        return (
          <MovieBox key={movie.id} movie={movie}/>
        )
      })}
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

const mapStateToProps = ({ movies }) => {
    return { 
      ...movies,
    }
};

const mapDispatchToProps = dispatch => {
    return {
      getMovies: () => dispatch(getMovies()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Movies);