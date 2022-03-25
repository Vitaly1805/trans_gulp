import IMask from 'imask';

//Фиксирование данных строки таблицы
if(document.querySelector('.table-permission__row')) {
    let rowsTable = document.querySelectorAll('.table-permission__row');
    let colsTable = document.querySelectorAll('.table-permission__col');
    let activeRowTable = 'table-content__row_active';

    colsTable.forEach((e) => {
        e.addEventListener('click', () => {
            let idPermission = e.parentElement.lastElementChild.value;
            let inputsProcess = document.querySelectorAll('.row-id-process');

            if(document.querySelector('.table-content__row_active')) {
                rowsTable.forEach((e) => {
                    e.classList.remove(activeRowTable);
                });
            }

            inputsProcess.forEach((e) => {
                e.value = idPermission;
            });

            e.parentElement.classList.add(activeRowTable);
        });
    });
}

//Вставка новой строки в таблицу
if(document.querySelector('.button-add-row')) {
    let buttonAdd = document.querySelector('.button-add-row');
    let table = document.querySelector('.table-content');
    let countCols = document.querySelector('.table-content__row_head').children.length;
    let heads = document.querySelectorAll('.table-content__head');
    let tableRow = document.querySelector('.table-row');
    let names = getAttributeName(heads);
    
    buttonAdd.addEventListener('click', () => {
        let countRows = document.querySelectorAll('.table-content__row').length;

        addRow(countRows);   
    })

    function getAttributeName(tags) {
        let result = [];

        tags.forEach(e => {
            result.push(e.getAttribute('name')); 
        });

        return result;
    }

    function setMask(input, names, i) {
        if(names[i] === 'date') {
            input.classList.add('date-mask');
            input.setAttribute('pattern', datePattern);
            input.classList.add('date');
        }

        if(names[i] === 'time-from') {
            input.classList.add('time-mask');
            input.classList.add('time-from');
            input.setAttribute('pattern', timePattern);
        }

        if(names[i] === 'time-to') {
            input.classList.add('time-mask');
            input.classList.add('time-to');
            input.setAttribute('pattern', timePattern);
        }
    }

    function addRow(countRows) {
        let addRow = tableRow.cloneNode(true);
        table.appendChild(addRow);

        fixRow();
        setMasks();
    }

//Фиксирование строки 
let delRow;
fixRow();

function fixRow() {
    let rowsTable = document.querySelectorAll('.table-row');
    let activeRowTable = 'table-content__row_active';
    
    rowsTable.forEach((e) => {
        e.addEventListener('click', () => {
            rowsTable.forEach((e) => {
                e.classList.remove(activeRowTable);  
            });

            e.classList.add(activeRowTable);  
            delRow = e;   
       });
    });

}

//Удаление строки
let delButton = document.querySelector('.button-del-row');

delButton.addEventListener('click', () => {
    let countRows = document.querySelectorAll('.table-row').length;

    if(countRows === 1 && delRow) {
        cleanRow();
        setMasks();
    } else if(delRow) {
        delRow.remove();
    }
});

function cleanRow() {
    for (let children of delRow.children) {
        children.firstElementChild.value = '';
    }
}

//Сохранение дат
let saveButton = document.querySelector('.save-dates');
let submitSaveDates = document.querySelector('.submit-save-dates');

saveButton.addEventListener('click', () => {
    let timesFrom = document.querySelectorAll('.time-from');
    let timesTo = document.querySelectorAll('.time-to');
    let dates = document.querySelectorAll('.date');
    if(checkTimes(timesFrom, timesTo) ) {
        submitSaveDates.click();
    }
});

//Проверка времени начала и окончания работ (нужно, чтобы время окончания было больше, чем время начала)
function checkTimes(timesFrom, timesTo) {
    let reg = '^([0-1][0-9]|2[0-4]):[0-5][0-9]$';
    let fl = false;

    timesFrom.forEach((e,i) => {
        if(timesFrom[i].value.search(reg) + 1 && timesTo[i].value.search(reg) + 1) {
            let objDateFrom = new Date();
            let objDateTo = new Date();
    
            objDateFrom.setHours(timesFrom[i].value.slice(0,2));
            objDateFrom.setMinutes(timesFrom[i].value.slice(3,5));
            objDateTo.setHours(timesTo[i].value.slice(0,2));
            objDateTo.setMinutes(timesTo[i].value.slice(3,5));
    
            if(objDateFrom < objDateTo) {
                fl = true;
            } else {
                timesFrom[i].classList.add('error-animation');
                timesTo[i].classList.add('error-animation');
            }
        } 
        else {
            timesFrom[i].classList.add('error-animation');
            timesTo[i].classList.add('error-animation');
        }

        setTimeout(() => {
            if(document.querySelector('.error-animation')) {
                let errorAnimation = document.querySelectorAll('.error-animation');

                errorAnimation.forEach(e => {
                    e.classList.remove('error-animation');
                });
            }
        }, 1000);
    })

    return fl;
}

//Функция установки масок
function setMasks() {
    if(document.querySelector('.date-mask')) {
        setMaskDate();
    }

    if(document.querySelector('.time-mask')) {
        setMaskTime();
    }
}
}

//Вызов функции установки маски даты
if(document.querySelector('.date-mask')) {
    setMaskDate();
}

//Функция установки маски даты
function setMaskDate() {
    let dates = document.querySelectorAll('.date-mask');
    let dateOptions = {
        mask: '00.00.0000',
        lazy: false
    };

    dates.forEach(e => {
        new IMask(e, dateOptions);
    });
}


//Вызов функции установки маски времени
if(document.querySelector('.time-mask')) {
    setMaskTime();
}

//Функция установки маски времени
function setMaskTime() {
    let dates = document.querySelectorAll('.time-mask');
    let dateOptions = {
        mask: '00:00',
        lazy: false
    };

    dates.forEach(e => {
        new IMask(e, dateOptions);
    });
}