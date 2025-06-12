import React, { Component } from 'react';
import axios from 'axios';
import Movie from '../sub/Movie';
import '../css/Main.css';

class Main extends Component {
  // (리액트 생명주기)1단계 - 프로그램이 시작하는 단계 //constructor(생성자) //어서오세요~
  state = { // 상태값 관리
    isLoading: true,
    movies: [] // 영화 정보가 데이터 로딩되는 곳
  };

  // axios.get을 사용하여 데이터를 불러오면 로딩 시간이 느리기 때문에 
  // 비동기 방식 async, await을 사용해야 한다.
  getMovies = async () => {
    const {
      data: {
        data: {movies},
      },
    } = await axios.get('https://yts.mx/api/v2/list_movies.json?sort_by=year'); // 영화 평점순으로 데이터를 로딩한다.
    // 출시연도 sort_by=year | 평정순 sort_by=rating

    console.log(movies); // 콘솔 창에 데이터 출력 확인

    this.setState({movies, isLoading:false});
  };

  // 생명주기 함수로서 화면 rendering이 끝나고 나서 실행되는 함수
  componentDidMount(){
    // setTimeout(() => {
    //   this.setState({isLoading:false}); // 3초 뒤에 true값을 false로 변경한다.
    // }, 4000); //4초로 변경
    this.getMovies(); // 영화 데이터의 함수 호출
  }

  render() {
    // (리액트 생명주기)2단계(react) - 화면에 표시될 정보가 나오는 단계 //react = componentDidMount //무엇을 도와드릴까요~
    const {isLoading, movies} = this.state;

    //(리액트 생명주기)3단계 - 사용자가 입력, dom정보가 수정되면 업데이트되는 단계 //componentDidUpdate //질문시 내용 설명을 친절하게 해준다

    //(리액트 생명주기)4단계 - 프로그램 종료시 실행 //componentWillUnmount //감사합니다. 또 오세요. 안녕히 가세요.

    return (
      // 2단계, 화면 표시하기
      <div>
        {/* 방법 1. 문자로 표시
         {isLoading ? 'Loading...' : '데이터 로딩 완료. 준비 끝~'} */}
        {/* 방법 2. 이미지로 표현 */}
        {/* {isLoading ? <img src={`${process.env.PUBLIC_URL}/images/bx_loader.gif`} alt='로딩 중' /> : '데이터 로딩 완료. 준비 끝~'} */}
        {isLoading ? <img src={`${process.env.PUBLIC_URL}/images/loader.jpg`} alt='로딩 중' className='loading_img' /> : <section className='main'>
          <div className='movies'>
            <ul className='movie_list'>
              {movies.map((movie) => (
                <Movie key={movie.id} 
                id={movie.id} 
                year={movie.year} 
                title={movie.title} 
                summary={movie.summary} 
                poster={movie.medium_cover_image} 
                genres={movie.genres} 
                rating={movie.rating} />
              ))}
            </ul>
          </div>
        </section>}
      </div>
    );
  }
}

export default Main;