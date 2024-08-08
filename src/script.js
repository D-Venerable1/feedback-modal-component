// write your JavaScript here
'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnOpenModal = document.querySelector('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const submit = document.querySelector('.Submit');
const cancel = document.querySelector('.Cancel');
const buttons = document.querySelectorAll('.ratings');
let lastSelectedButton = null;


function handleClick () {
    // Toggle the selected class on the clicked button
    if (lastSelectedButton) {
        lastSelectedButton.classList.remove('selected')
    }

    this.classList.toggle('selected');

    lastSelectedButton = this;
}

buttons.forEach(function(buttons){
    buttons.addEventListener('click', handleClick);
});


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

    if (lastSelectedButton) {
        lastSelectedButton.classList.remove('selected');
        lastSelectedButton = null;
    }
}

    btnOpenModal.addEventListener('click', openModal);
    btnCloseModal.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
    submit.addEventListener('click', closeModal);
    cancel.addEventListener('click', closeModal);
    
