'use strict';
const btnScrollto = document.querySelector('.btn--scroll-to');
const section1= document.getElementById('section--1');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav= document.querySelector('.nav')

///////////////////////////////////////
// Modal window


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

// Page Navigation 

// document.querySelectorAll('.nav__link').forEach(function(el){ //Sol1
//   el.addEventListener('click',function(e){
//     e.preventDefault();
//     // console.log('link')
//     const id = this.getAttribute('href');
//     console.log(id)
//     document.querySelector(id).scrollIntoView({behavior:'smooth'})
//   })
// })

//1. Add event listenr to common parent element
//2 Determine what eleent originated the event
document.querySelector('.nav__links').addEventListener('click',function(e){
  console.log(e.target)
  e.preventDefault();

  //Matching stratergy
  if(e.target.classList.contains('nav__link')){
    // console.log('Link')
      console.log('link')
        const id = e.target.getAttribute('href');
         console.log(id)
         document.querySelector(id).scrollIntoView({behavior:'smooth'})
  }
});


//Dom traversing
const h1 = document.querySelector('h1')
// Toint downwaards:child
console.log(h1.querySelectorAll('.highlight'))
console.log(h1.childNodes)
console.log(h1.children)
h1.firstElementChild.style.color='white'
h1.lastElementChild.style.color='blue'

//Going upwards:parents
console.log(h1.parentNode)//Same
console.log(h1.parentElement)//Same

// h1.closest('.header').style.background='var(--gradient-secondary)';
h1.closest('h1').style.background='var(--gradient-primary)'; // return itself

//closet like QuerrySelector and QuerrySelectorAll
// header.style.background='var(--gradient-secondary)'

//Gpomg sideways:sibling
console.log(h1.previousElementSibling)
console.log(h1.nextElementSibling)

console.log(h1.previousSibling)
console.log(h1.nextSibling)

console.log(h1.parentElement.children);

// [...h1.parentElement.children].forEach(function(el){
//   if(el!==h1) el.style.transform ='scale(0.5)'
// })


//----- End Today
//Events 
// const h1= document.querySelector('h1');
// const altereh1= function(e){
//   alert('AddEvenetListener: Great : You are reading');1
// }
// h1.addEventListener('mouseenter',altereh1)
 
//   setTimeout(()=>  h1.removeEventListener('mouseenter',altereh1),3000 )


  



// h1.addEventListener('mouseenter',function(e){
//   e.preventDefault();
//   alert('AddEvenetListener: Great : You are reading ')
// })
// h1.onmouseenter = function(e){
//   e.preventDefault();
//   alert('OnMouseEnter: Great : You are reading ')
// };

// New Pratice
// const randomInt =(min,max)=>{
//   Math.floor(Math.random()*(max - min + 1)+min)
// }
// const randomColor=()=>{
//   // `rgb(${randomInt(0,255)},${randomInt(0,255)},${randomInt(0,255)})`;
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`
// }
// console.log(randomColor);

// document.querySelector('.nav__link').addEventListener('click',function(e){
//     // console.log('link')
//     // e.preventDefault()
//     this.style.backgroundColor = randomColor()
// });
// document.querySelector('.nav__link').addEventListener('click',function(e){
// });
// document.querySelector('.nav').addEventListener('click',function(e){
// });


//Bubbling Phase

// const randomInt = (min, max) =>{

//    return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const randomColor = () =>{
//   return `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// }

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor(); //this pointing to the element this eventlistener attached to
//   console.log('Link',e.target,e.currentTarget);
//   console.log(e.currentTarget===this) // True


//   //Stop propagation
//   // e.stopPropagation()
// });
// document.querySelector('.nav__links').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('Container',e.target,e.currentTarget)


// })
// document.querySelector('.nav').addEventListener('click',function(e){
//   this.style.backgroundColor = randomColor();
//   console.log('NAV',e.target,e.currentTarget)
// },true)// the nav will be the first event

const tabs= document.querySelectorAll('.operations__tab');
const tabContainer= document.querySelector('.operations__tab-container');
const tabContent= document.querySelectorAll('.operations__content');

// tabs.forEach(t=>t.addEventListener('click',()=>console.log('tab')))

tabContainer.addEventListener('click',function(e){
  const clicked = e.target.closest('.operations__tab');// using going upward
  console.log(clicked)
  
  //Guard clause
  if(!clicked) return;
  // Active Tab
  tabs.forEach(t=>t.classList.remove('operations__tab--active'));
  //remove
  tabContent.forEach(c=>c.classList.remove('operations__content--active'))
  clicked.classList.add('operations__tab--active')
  console.log(clicked.dataset.tab)
  //Active content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active')
    
    

})


//Menu fade animations
const handleHover=function(e){
  console.log(this,e.currentTarget)
  if(e.target.classList.contains('nav__link')){
    const link = e.target;
    const siblings =link.closest('.nav').querySelectorAll('.nav__link')
    const logo = link.closest('.nav').querySelector('img')
    siblings.forEach(el=>{
      if(el!==link) el.style.opacity = this;
    });
    logo.style.opacity=this;
  }
} 

//Passing 'Arugument' into handler
nav.addEventListener('mouseover',handleHover.bind(0.5))
nav.addEventListener('mouseout',handleHover.bind(1))

//NavBar attached on top
//Sticky Navigation


// const initialCoords=section1.getBoundingClientRect()
// console.log(initialCoords)
// window.addEventListener('scroll',function(){
//   console.log(window.scrollY);
// if(window.scrollY>initialCoords.top){
//   nav.classList.add('sticky');
// }
// else{
//   nav.classList.remove('sticky');

// }
// })

//API
// const obsCallback=function(entries,observe){
//     entries.forEach(entry=>{
//       console.log(entry)
//     })

// }
// const obsOptions={
//   root:null,
//   threshold:[0,0.2],
// }

// const observer = new IntersectionObserver(obsCallback,obsOptions);
// observer.observe(section1);

// const header = document.querySelector('.header')
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight)
const stickyNav = function(entries){
  const[entry]=entries;
  // console.log(entry);
  if(!entry.isIntersecting){
  nav.classList.add('sticky')

  }
  else{
    nav.classList.remove('sticky')
  }
}
const headerObserve= new IntersectionObserver(stickyNav,{
  root:null,
  threshold:0,
  // rootMargin:'-90px',
  rootMargin:`-${navHeight}px`,
});
headerObserve.observe(header)

//Reveal sections
const allSections= document.querySelectorAll('.section')
console.log('Hey')
const revealSection = function(entries,observe){
    // console.log(entries)
      const [entry]=entries;
      // console.log(entry)
      if(!entry.isIntersecting) return;

   entry.target.classList.remove('section--hidden')
   observe.unobserve(entry.target)
}
const sectionsObserve = new IntersectionObserver(revealSection,{
  root:null,
  threshold:0.15,
});
allSections.forEach(function(section){
  sectionsObserve.observe(section)
  section.classList.add('section--hidden')

})

// Loading img
const imgTargets = document.querySelectorAll('img[data-src]')
console.log(imgTargets)
console.log('New')
const loadImg = function(entries,observe){
  const [entry]=entries;
  console.log(entry)
  if(!entry.isIntersecting) return;
  // Replace src with data-src
  entry.target.src= entry.target.dataset.src
  entry.target.addEventListener('load',function(){
      entry.target.classList.remove('lazy-img')
  })
  // entry.target.loadImg()
  observe.loadImg(entry.target)
}

const imgObserver = new IntersectionObserver(loadImg,{
  root:null,
  threshold:0,
  rootMargin:'-200px'
});

imgTargets.forEach(img=>imgObserver.observe(img))
