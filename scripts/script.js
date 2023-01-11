'use strict';
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '3');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    let movieTitle = 
    prompt('Один из последних просмотренных фильмов?', 'Logan'),
    score = +prompt('На сколько оцените его?', '8.1');
    if (movieTitle === null || 
        movieTitle.length == 0 || movieTitle.length > 50)  {
        alert('Что-то пошло не так, введите ещё раз!');
        i--;
        continue;
    }
    personalMovieDB.movies[movieTitle] = score;
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
} else {
    console.log('Произошла ошибка!');
}

console.log(personalMovieDB);