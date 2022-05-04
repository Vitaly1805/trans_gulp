//Открытие формы фильтрации при нажатии на соответсвующую кнопку
if(document.querySelector('.filter')) {
    let submitFilter = document.querySelector('.filter');
    let blockFilter = document.querySelector('.filter-content');
    let closeFilter = document.querySelector('.close-filter');

    submitFilter.addEventListener('click', () => {
        blockFilter.classList.toggle('filter-content_active');
    });

    closeFilter.addEventListener('click', () => {
        blockFilter.classList.toggle('filter-content_active');
    });
}

//Установка маски поиска
if(document.querySelector('.input-search')) {
    let search = document.querySelector('.input-search');
    let dateOptions = {
        mask: /^[а-яА-Я0-9 ]*$/,
        lazy: false
    };

    new IMask(search, dateOptions);

}


//Фиксирование строки таблицы
if(document.querySelector('.table-permission__row')) {
    let checkboxes = document.querySelectorAll('.input-choice-permission');

    checkboxes.forEach((e) => {
        e.addEventListener('click', () => {
            checkboxes.forEach(elem => {
                if(elem.checked && elem !== e) {
                    elem.checked = false;
                }
            });

            let idPermission = e.parentElement.parentElement.parentElement.querySelector('.row-id').value;
            let inputsProcess = document.querySelectorAll('.row-id-process');
            
            inputsProcess.forEach((input) => {
                if(e.checked) {
                    input.value = idPermission;
                } else {
                    input.value = '';
                }
            });
        });
    });
}