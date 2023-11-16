const fetch = require('node-fetch');
 
const baseUrl = 'https://api.themoviedb.org/3/';

const url = (urlName) => {
  return baseUrl + `${urlName}` + "?language=en-US";
}


 
// const nowPlayingUrl = baseUrl + "movie/now_playing" + "?language=en-US";
// const popularUrl = baseUrl + "movie/popular" + "?language=en-US";
// const topRatedUrl = baseUrl + "movie/top_rated" + "?language=en-US";
// const upComingdUrl = baseUrl +  "movie/upcoming" + "?language=en-US";
 
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
  fetch(url("movie/now_playing"), options).then((res) => res.json());

export const popular = () => 
  fetch(url("movie/popular"), options).then((res) => res.json());

export const topRated = () => fetch(url("movie/top_rated"), options).then((res) => res.json());

export const upComing = () => fetch(url("movie/upcoming"), options).then((res) => res.json());