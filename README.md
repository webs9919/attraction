# Youtube API를 이용한 여행 사이트
React 프레임워크와 YouTube API를 이용하여 자신만의 간단한 영상 사이트를 만듭니다. React의 기본 개념을 이해하고, 컴포넌트를 구조화하고 상태를 관리하는 방법을 학습하며, YouTube Data API를 활용하여 외부 데이터를 가져오는 방법을 익히고, API 응답을 처리하여 사용자에게 의미 있는 정보를 제공하는 방법을 이해합니다.

## 작업 순서
1. node.js 설치 / 버전 확인
2. 폴더 셋팅 : 필요없는 파일 제거

## 필요한 라이브러리 설치
- react를 설치 `npm create-react-app 폴더이름` : 폴더를 생략하고 싶으면 .으로 표시
- react-router-dom 설치 `npm install react-router-dom` : 주소를 설정하기 위한 라이브러리
- axios 설치 `npm install axios` : API 라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘 
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : CSS 라이브러리
- react-helmet-asyne 설치 `npm install react-helmet-async` : SEO
- swiper 설치 `npm install swiper` : 이미지 슬라이트

## 사용 스택
"react": "^18.3.1",   
"react-dom": "^18.3.1",   
"react-helmet-async": "^2.0.5",   
"react-icons": "^5.2.1",   
"react-player": "^2.16.0",   
"react-router-dom": "^6.23.1",   
"react-scripts": "5.0.1",   
"sass": "^1.77.2",   
"swiper": "^11.1.3",   
"web-vitals": "^2.1.4"   

## 트러블 슈팅
- Rapid API를 이용했었는데.. 데이터를 불러오지 못해서 youtube API를 사용해서 구성함
