'use strict'

const modalBg = document.querySelector('.modal-popup');
const modalPopup = document.querySelectorAll('.pop-form-container');

const loginBtn = document.querySelector('.btn-primary.login');
const joinBtn = document.querySelector('.btn-primary.join');

const closeBtn = document.querySelectorAll('.btn-close');


loginBtn.addEventListener('click', () => {
    modalBg.classList.add('active');
    modalPopup[0].classList.add('active');
});

joinBtn.addEventListener('click', () => {
    modalBg.classList.add('active');
    modalPopup[1].classList.add('active');
});

closeBtn[0].addEventListener('click', () => {
    modalBg.classList.remove('active');
    modalPopup[0].classList.remove('active');
});

closeBtn[1].addEventListener('click', () => {
    modalBg.classList.remove('active');
    modalPopup[1].classList.remove('active');
});