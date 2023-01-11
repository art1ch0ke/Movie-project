'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '3');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i <= 2; i++) {
    let movieTitle = 
    prompt('Один из последних просмотренных фильмов?', 'Logan'),
    score = +prompt('На сколько оцените его?', '8.1');
    personalMovieDB.movies[movieTitle] = score;
}

console.log(personalMovieDB);