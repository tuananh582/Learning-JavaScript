'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};
const header= document.querySelector('.header')
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
console.log(document.head)
console.log(document.body)
console.log(document.querySelectorAll('.btn--show-modal'));
console.log(document.querySelectorAll('.section'));

const allButton= document.getElementsByTagName('button')
console.log(allButton);

//Creating and inserting elements
//.insertAdjacenHTml

const message=document.createElement('div')
message.classList.add('cookie-message')
// message.textContent='We use cookired for improved functionality and anlytics';
message.innerHTML= 'We use cookired for improved functionality and anlytics <button class="btn btn--close-cookie">Got It</button> ';

header.prepend(message)//That is the first Child
// header.append(message)// That is the last Child

// header.after(message)
// header.before(message)

//Delete elements
document.querySelector('.btn--close-cookie').addEventListener('click',function(){
    // message.remove();
    message.parentElement.removeChild(message)
})