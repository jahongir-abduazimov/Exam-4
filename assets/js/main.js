"use strict";

let questionBtn = $('.header-nav__button'),
    body = $('body'),
    popup = $('#popup'),
    removeBtn = $('.remove-btn'),
    popupBg = $('.popup-bg'),
    popupWrapper = $('.popup-wrapper'),
    popupForm = $('#popup-form'),
    toggleMenu = $('.toggle-menu'),
    toggleBtn = $('.menu-btn'),
    questionBtn2 = $('.header-nav__button2')

function togglePopup() {
    popup.classList.toggle('dnone')
    body.classList.toggle('overflowHidden')
}

questionBtn.addEventListener('click', () => {
    togglePopup()
})

questionBtn2.addEventListener('click', () => {
    togglePopup()
})

removeBtn.addEventListener('click', () => {
    togglePopup()
})

popupBg.addEventListener('click', () => {
    togglePopup()
})

popupForm.addEventListener('submit', () => {
    popupWrapper.innerHTML = `
        <div class="popup-success-wrapper">
            <div class="popup-success" style="display:flex; flex-direction:column; justify-content: space-between; aligin-items-center">
                <div>
                    <img src="./assets/images/popup-succes.svg" alt="img">
                </div>
                <div>
                    <h1>Спасибо, ваша заявка принята</h1>
                    <p>Мы свяжемся с вами в течение х минут</p>
                </div>
                <div>
                    <button class="close-tab">Закрыть окно</button>
                </div>
            </div>
        </div>
    `
})

popupWrapper.addEventListener('click', (e) => {
    if (e.target.classList.contains('close-tab')) {
        togglePopup()
    }
})


toggleBtn.addEventListener('click', () => {
    toggleMenu.classList.toggle('translate')
    body.classList.toggle('overflowHidden')
})