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

const message=document.createElement('div');
message.classList.add('cookie-message');
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

//Styles
message.style.backgroundColor='#37383d'
message.style.width='120%'

console.log(message.style.backgroundColor)

console.log(getComputedStyle(message).color)
console.log(getComputedStyle(message).height)

message.style.height=Number.parseFloat(getComputedStyle(message).height,10)+30+'px'

document.documentElement.style.setProperty('--color-primary','orangered')

//Attributes
const logo = document.querySelector('.nav__logo')
console.log(logo.alt);
console.log(logo.src);//output htttps:...
console.log(logo.className);
logo.alt = 'Beautiful minimalisst logo'
logo.setAttribute('company','Bankist')
console.log(logo.getAttribute('src'))// output img/logo.png

const link = document.querySelector('.nav__link--btn')
console.log(link.href)
console.log(link.getAttribute('href'))

//Data attributes
console.log(logo.dataset.versionNumber)

//Classes
logo.classList.add('c')
logo.classList.remove('c')
logo.classList.toggle('c')
logo.classList.contain('c')

// Don't use this
logo.className='tuan anh'