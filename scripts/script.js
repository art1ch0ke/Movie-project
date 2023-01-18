'use strict';

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '3');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
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
}

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Произошла ошибка!');
    }
}

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = 
        prompt(`Ваш любимый жанр под номером ${i + 1}:`);
    }
}

//rememberMyFilms();
//detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);