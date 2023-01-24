'use strict';

const personalMovieDB = {
    count: undefined,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '3');
    
        while (this.count == '' || this.count == null ||
         isNaN(this.count)) {
            this.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    toggleVisibleMyDB: function() {
        if (this.privat) { 
            this.privat = false; 
        } else { 
            this.privat = true; 
        }
    },

    rememberMyFilms: function() {
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
    },

    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман!');
        } else {
            console.log('Произошла ошибка!');
        }
    },

    showMyDB: function(hidden=this.privat) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    },

    writeYourGenres: function() {
        for (let i = 0; i < 3; i++) {
            personalMovieDB.genres[i] = 
            prompt(`Ваш любимый жанр под номером ${i + 1}:`);
            if (personalMovieDB.genres[i] == null || 
                personalMovieDB.genres[i] == '') {
                    personalMovieDB.genres[i] = 
                    prompt(`Ваш любимый жанр под номером ${i + 1}:`);
                    i--;
            }
        }
        
        this.genres.forEach((item, i) => {
            console.log(`Любимый жанр #${i + 1} — это ${item}`);
        });
    }
};
personalMovieDB.start();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();