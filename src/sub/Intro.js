import React from 'react';
import '../css/Sub.css';

function Intro(props) {
  return (
    <section className='main sub'>
      <h2>인트로 페이지</h2>
      <p>YIFY Torrents 또는 YTS는 BitTorrent를 통해 많은 수의 영화를 무료 다운로드로 배포하는 것으로 알려진 피어 투 피어 릴리스 그룹이었습니다. YIFY 릴리스는 작은 파일 크기로 특징 지어졌으며 많은 다운로더를 매료했습니다.</p>

      <p>원래 YIFY/YTS 웹사이트는 2015년 MPA(Motion Picture Association)에 의해 폐쇄되었습니다. 그러나 YIFY/YTS 브랜드를 모방한 수많은 웹사이트는 여전히 상당한 양의 트래픽을 받고 있습니다. "YIFY"라는 이름은 뉴질랜드 오클랜드 출신의 대학생(나중에 앱 개발자, 웹 개발자 및 양궁 챔피언)인 설립자 Yiftach Swery의 이름에서 파생되었습니다.</p>
    </section>
    // 출처: https://en.wikipedia.org/wiki/YIFY
  );
}

export default Intro;