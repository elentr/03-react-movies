import css from './App.module.css';

import ErrorMessage from '../ErrorMessage/ErrorMessage';
import Loader from '../Loader/Loader';
import MovieGrid from '../MovieGrid/MovieGrid';
import MovieModal from '../MovieModal/MovieModal';
import SearchBar from '../SearchBar/SearchBar';
// import { Movie } from '../types/movie';

// import { useState } from 'react';
// import type { Votes } from '../../types/votes';
// import type { VoteType } from '../../types/votes';

export default function App() {
  return (
    <div className={css.app}>
      <ErrorMessage />
      <Loader />
      <MovieGrid />
      <MovieModal />
      <SearchBar />
    </div>
  );
}
