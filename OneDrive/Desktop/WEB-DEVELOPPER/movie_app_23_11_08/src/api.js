const fetch = require('node-fetch');

const baseUrl = 'https://api.themoviedb.org/3/';
const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=en-US";

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWVhYWMwMjdhZDU4ZTcwYTZjNDg1Njc0ZTMzNTQzZCIsInN1YiI6IjY1NGIzYTU5MWFjMjkyN2IzMDI5OTBhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tdl69kopaTeJ7ZQ4FrkUs1gvHFA4wloCudQnz1byzrs'
  }
};

/* fetch(baseUrl, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err)); */

export const nowPlaying = () => 
  fetch(nowPlayingUrl, options).then((res) => res.json());
 