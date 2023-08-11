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
const btnScrollto = document.querySelector('.btn--scroll-to');
const section1= document.getElementById('section--1');

btnScrollto.addEventListener('click',function(e){
  e.preventDefault();
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords)
  console.log(e.target.getBoundingClientRect())
  console.log('Current scroll (X/Y)',window.pageXOffset, pageYOffset)
  console.log('Height/width viewport',document.documentElement.clientHeight, document.documentElement.clientWidth)
//Scrolling
// window.scrollTo(s1coords.left+window.pageXOffset,s1coords.top+window.pageYOffset)
// window.scrollTo({
//   left:s1coords.left+window.pageXOffset,
//   top:s1coords.top+window.pageYOffset,
//   behavior:'smooth'
// })
// })
section1.scrollIntoView({behavior:'smooth'});
})