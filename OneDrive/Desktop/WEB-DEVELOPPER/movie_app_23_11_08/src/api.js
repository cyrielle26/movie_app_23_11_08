const fetch = require('node-fetch');

const url = 'https://api.themoviedb.org/3/';
const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMWVhYWMwMjdhZDU4ZTcwYTZjNDg1Njc0ZTMzNTQzZCIsInN1YiI6IjY1NGIzYTU5MWFjMjkyN2IzMDI5OTBhOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Tdl69kopaTeJ7ZQ4FrkUs1gvHFA4wloCudQnz1byzrs'
  }
};

fetch(url, options)
  .then(res => res.json())
  .then(json => console.log(json))
  .catch(err => console.error('error:' + err));