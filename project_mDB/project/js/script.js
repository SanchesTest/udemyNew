document.addEventListener('DOMContentLoaded', () => {

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = poster.querySelector('.promo__genre'),
      movieList = document.querySelector('.promo__interactive-list'),
      addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]');

// submit = отследить отправку формы, сработает при клике на кнопку отправить
addForm.addEventListener('submit', (event) => {
    event.preventDefault();

    // что ввел пользователь в поле
    let newFilm = addInput.value;

    // отмечена ли галка true / false
    const favorite = checkbox.checked;

    // если поле ввода заполнено
    if(newFilm){

        // Если название фильма больше, чем 21 символ - обрезать его и добавить три точки
        if(newFilm.length > 21){
            // обрезаем строку от 0 до 22 символа
            newFilm = `${newFilm.substring(0, 22)}...`;
        }

        if(favorite){
            console.log('Добавляем любимый фильм');
        }

        // поместить в масс., то что ввел пользователь
        movieDB.movies.push(newFilm);

        // сортируем елем. в массиве по алфавиту
        sortArray(movieDB.movies);

        // выводим елем. с массива на страницу
        createMovieList(movieDB.movies, movieList);
    }

    // очищаем поля формы
    event.target.reset();

});

// удалить елем. с дом дерева
const deleteAdv = (arr) => {
    adv.forEach(item => {
        item.remove();
    });
};

const makeChanges = () => {
    genre.textContent = 'драма';
    poster.style.backgroundImage = 'url("img/bg.jpg")';
};

// сортируем елем. в массиве по алфавиту
const sortArray = (arr) => {
    arr.sort();
};

// выводим елем. с массива на страницу
function createMovieList(films, parent){
    parent.innerHTML = "";
    sortArray(films);
    
    films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
            </li>
        `;
    });

    // Удаляем елементы со страницы и с массива
    document.querySelectorAll('.delete').forEach((btn, i) => {
        btn.addEventListener('click', () => {
            // удалить со страницы
            btn.parentElement.remove();

            // удалить с массива = splice() = вырезать елем с массива = i елем (номер) который нужно удалить = 1 = сколько елем удалить
            movieDB.movies.splice(i, 1);

            // выводим елем. с массива на страницу / что бы нумерация работала
            createMovieList(films, parent);
        });
    });
}

makeChanges();
deleteAdv(adv);
createMovieList(movieDB.movies, movieList);

});