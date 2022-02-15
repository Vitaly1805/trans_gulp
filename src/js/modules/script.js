import { isMobile } from "./functions.js";

//Модальное окно регистрации о сайте
if(document.querySelector('.header__icon')) {
    const SPEED_ANIMATE = 500;
    const modal = document.querySelector('.window-authorization');
    const closeModal = document.querySelector('.window-authorization__clear');

    closeModal.addEventListener('click', () => {
        modal.classList.remove('open');
        modal.classList.add('hide');

        setTimeout(() => {
            modal.classList.remove('hide');
        }, SPEED_ANIMATE);
    });

    addEventListener('keydown', (e) => {
        if(e.key === 'Escape') {
            if(modal.classList.contains('open')) {
                modal.classList.remove('open'); 
                modal.classList.add('hide');
            }

            setTimeout(() => {
                modal.classList.remove('hide');
            }, SPEED_ANIMATE);
        }
    });

    if(document.querySelector('.window-authorization__form-in')) {
        const auth = document.querySelector('.window-authorization__title-in');
        const reg = document.querySelector('.window-authorization__title-reg');
        const authForm = document.querySelector('.window-authorization__form-in');
        const regForm = document.querySelector('.window-authorization__form-reg');
        const buttonAuth = document.querySelector('.content__button-auth');
        const buttonReg = document.querySelector('.content__button-reg');
        const windowauthorization = document.querySelector('.window-authorization');
        const authorizationButton = document.querySelector('.header__icon');
    
        function toogleForms(form1, form2, title1, title2) {
            form1.classList.add('window-authorization__form_active');
            form2.classList.remove('window-authorization__form_active');
            title1.classList.add('window-authorization__title_active');
            title2.classList.remove('window-authorization__title_active');
        }

        authorizationButton.addEventListener('click', () => {
            modal.classList.add('open');
        });

        windowauthorization.addEventListener('click', (e) => {
            if(e.target.classList[0] === 'window-authorization') {
                modal.classList.remove('open');
                modal.classList.add('hide');
        
                setTimeout(() => {
                    modal.classList.remove('hide');
                }, SPEED_ANIMATE);
            }
        });
    
        buttonAuth.addEventListener('click', () => {
            toogleForms(authForm, regForm, auth, reg);

            modal.classList.add('open');
            modal.classList.remove('hide');
        });

        buttonReg.addEventListener('click', () => {
            toogleForms(regForm, authForm, reg, auth);

            modal.classList.add('open');
            modal.classList.remove('hide');
        });

        reg.addEventListener('click', () => {
            toogleForms(regForm, authForm, reg, auth);
        });
    
        auth.addEventListener('click', () => {
            toogleForms(authForm, regForm, auth, reg);
        });
    }
}

//Скрытие пароля
if(document.querySelector('.window-authorization__icon')) {
    let blockPass = document.querySelectorAll('.window-authorization__password');

    blockPass.forEach( (pass, index) =>  {
        let icon = pass.lastElementChild;
        
        icon.addEventListener('click', () => {
            let inputPassword = document.querySelectorAll('.input-password')[index];

            if (inputPassword.getAttribute('type') == 'password') {
                icon.classList.remove('icon-password');
                icon.classList.add('icon-password-hidden');
                inputPassword.setAttribute('type', 'text');
            } else {
                icon.classList.remove('icon-password-hidden');
                icon.classList.add('icon-password');
                inputPassword.setAttribute('type', 'password');
            }
        });
    });
}
