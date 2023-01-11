'use strict';
alert('Сколько фильмов вы уже посмотрели?');
const numberOfFilms = +prompt('', '3');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <= 2; i++) {
    alert('Один из последних просмотренных фильмов?');
    let movieTitle = prompt();
    alert('На сколько оцените его?');
    let score = +prompt();
    personalMovieDB.movies[movieTitle] = score;
}