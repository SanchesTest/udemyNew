'use strict';

let numberOfFilms;

// Проверка на правильность ввода количества просмотренных фильмов
function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();

// Главный массив с данными
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
}

// detectPersonalLevel();

// Узнаем любимий жанр
function writeYourGenres() {
    for(let i = 1; i <= 3; i++){
        const genresFilm = prompt(`Ваш любимый жанр под номером ${i}`);
        if (genresFilm != null && genresFilm != '' && genresFilm.length < 50) {
            personalMovieDB.genres[i - 1] = genresFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

writeYourGenres();

// Провериям обьект на приватность, и если не приватен выводим инфу по нему
function showMyDB(hidden) {
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);



