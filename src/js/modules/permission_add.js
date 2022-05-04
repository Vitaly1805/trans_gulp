import IMask from 'imask';

//Перетекание данных из textarea для отправки данных на сервер

if(document.getElementById('untypical_works_form')) {
    let textareaUntypicalWorks = document.getElementById('untypical_works');
    let textareaUntypicalWorksForm = document.getElementById('untypical_works_form');

    if(textareaUntypicalWorks.value !== '') {
        textareaUntypicalWorksForm.value = textareaUntypicalWorks.value;
    }

    textareaUntypicalWorks.addEventListener('change', () => {
        textareaUntypicalWorksForm.value = textareaUntypicalWorks.value;
    });
}

if(document.getElementById('description_form')) {
    let textareaDescription = document.getElementById('description');
    let textareaDescriptionFrom = document.getElementById('description_form');

    if(textareaDescription.value !== '') {
        textareaDescriptionFrom.value = textareaDescription.value;
    }

    textareaDescription.addEventListener('change', () => {
        textareaDescriptionFrom.value = textareaDescription.value;
    });
}

if(document.getElementById('addition_form')) {
    let textareaAddition = document.getElementById('addition');
    let textareaAdditionForm = document.getElementById('addition_form');

    if(textareaAddition.value !== '') {
        textareaAdditionForm.value = textareaAddition.value;
    }

    textareaAddition.addEventListener('change', () => {
        textareaAdditionForm.value = textareaAddition.value;
    });
}


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