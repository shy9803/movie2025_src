import React from 'react';
import ProtoTypes from 'prop-types'; // 데이터 타입 검사
import { Link } from 'react-router-dom';

function Movie({poster, title, year, genres, summary, rating}) {
  return (
    <li>
      <Link to='/movie-detail' state={{poster, title, year, genres, summary, rating}}>
        <img src={poster} alt={title} />
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <p className='movie_year'>{year}</p>
          <p className='movie_rating'>&#9733; {rating}</p>
          <p className='movie_genre'>{genres.join(', ')}</p>

          {/* 줄거리는 200자 이상시 생략기호 나오게 한다. */}
          <p className='movie_summary'>{summary.slice(0, 200)}...</p>
        </div>
      </Link>
    </li>
  );
}

// 데이터 타입 검사
Movie.ProtoTypes={
  id:ProtoTypes.number.isRequired,
  year:ProtoTypes.number.isRequired,
  title:ProtoTypes.string.isRequired,
  summary:ProtoTypes.string.isRequired,
  poster:ProtoTypes.string.isRequired,
  genres:ProtoTypes.arrayOf(ProtoTypes.string).isRequired
}

export default Movie;