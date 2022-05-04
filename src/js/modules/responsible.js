if(document.querySelector('.responsible__table')) {
    let checkboxes = document.querySelectorAll('.responsible-preparation__checkbox');
    let save = document.getElementById('save-responsibles');
    let saveInput = document.getElementById('keys-responsibles');
    let arrResponsiblesId = [];

    save.addEventListener('click', () => {
        arrResponsiblesId.forEach(e => {
            if(saveInput.value === '') {
                saveInput.value = e;
            } else {
                saveInput.value = saveInput.value + ' ' + e;
            }
        });
    });

    checkboxes.forEach(e => {
        addListenerForCheckbox(e);
    });

    
    function addListenerForCheckbox(checkbox) {
        checkbox.parentElement.addEventListener('click', (event) => {
            if(event.target.classList.contains('table-content__col')) {
                if(checkbox.checked) {
                    checkbox.checked = false;
                } else {
                    checkbox.checked = true;
                }
            } 

            toggleRowToChiceTable(checkbox);
        });
    }

    function toggleRowToChiceTable(elem) {
        let mainTableRow = elem.parentElement.parentElement;
        let choiceTable = document.querySelector('.responsible__table_choice');
        let choiceBlock = document.querySelector('.responsible__choice');
        let col = mainTableRow.cloneNode(true);
        let id = col.querySelector('.input').value;
        let fl = true;

        Array.from(choiceTable.children).forEach(e => {
            if(e.querySelector('.input') && col.querySelector('.input')) {
                if(e.querySelector('.input').value === col.querySelector('.input').value) {
                    let index =  arrResponsiblesId.indexOf(id);
                    arrResponsiblesId.splice(index, 1);
                    fl = false;
                    e.remove();
                }
            }
        });

        if(fl) {
            arrResponsiblesId.push(id);
            choiceTable.appendChild(col);
            addListenerForCheckbox(col.querySelector('.input'));
            choiceBlock.classList.add('responsible__choice_active');
        } else if(!choiceTable.querySelector('.responsible__row')) {
            choiceBlock.classList.remove('responsible__choice_active');
        }
    }
}