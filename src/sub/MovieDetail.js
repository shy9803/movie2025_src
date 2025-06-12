import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../css/MovieDetail.css';

function MovieDetail(props) {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if(!location.state) {
      navigate('/');
    }
  }, [location, navigate]); //정보 없으면 이전 페이지로

  if(!location.state) return null; //정보 없으면 null 리턴

  const {poster, title, year, genres, summary, rating} = location.state;

  return (
    <div className='main movie_detail'>
      {/* 개별 영화 상세 페이지 */}
        <div className='img_loc'>
          <img src={poster} alt={title} />
        </div>
        <div className='movie_data'>
          <h3 className='movie_title'>{title}</h3>
          <p className='movie_year'>{year}</p>
          <p className='movie_rating'>&#9733; {rating}</p>
          <p className='movie_genre'>{genres.join(', ')}</p>
          <p className='movie_summary'>{summary}</p>
        </div>

        <button type='button'onClick={() => navigate(-1)} className='backbtn'>목록으로</button>
    </div>
  );
}

export default MovieDetail;