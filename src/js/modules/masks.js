import IMask from 'imask';

//Установка маски номерам разрешений
if(document.querySelector('.permission__number')) {
    let firstNumber = document.querySelector('.permission__number_first');
    let secondNumber = document.querySelector('.permission__number_second');

    let dateOptionsFirst = {
        mask: /^[0-9/-]*$/,
        lazy: false
    };

    let dateOptionsSecond = {
        mask: /^[0-9]*$/,
        lazy: false
    };

    new IMask(firstNumber, dateOptionsFirst);
    new IMask(secondNumber, dateOptionsSecond);
}