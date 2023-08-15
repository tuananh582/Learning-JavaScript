'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
let map,mapEvent;
// navigator.geolocation?.getCurrentPosition(function (position) {
//     const { latitude } = position.coords;
//     const { longitude } = position.coords;
//     console.log(latitude, longitude)
    
//     const coords=[latitude,longitude]
//      map = L.map('map').setView(coords, 17);
//     L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
//         attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//     }).addTo(map);

//     // L.marker(coords).addTo(map)
//     //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
//     //     .openPopup();

//     //Handling clicks on map
//     map.on('click',function(mapE){
//             mapEvent=mapE;
//             form.classList.remove('hidden')
//             inputDistance.focus()

//             // console.log(mapEvent)
//             // const {lat,lng}=mapEvent.latlng;
//             // L.marker([lat,lng]).addTo(map)
//             // .bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:false,closeOnClick:false,className:'running-popup'})).setPopupContent('Hey Working Out')
//             //  .openPopup();
//     })// coming from leaflet libary

// }, function () {
//     alert('Could not get your position')
// });

// form.addEventListener('submit',function(e){
//     //Clear input Fields
//     inputDistance.value= inputDuration.value =inputCadence.value=inputElevation.value='';


//     //Display marker
//     e.preventDefault();
//         console.log(mapEvent)
//             const {lat,lng}=mapEvent.latlng;
//             L.marker([lat,lng]).addTo(map)
//             .bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:false,closeOnClick:false,className:'running-popup'})).setPopupContent('Hey Working Out').openPopup();
// });

// inputType.addEventListener('change',function(){
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
// })






//Refactoring code using Class

class workout{
    date = new Date();
    id = ( Date.now()+'').slice(-10);

    constructor(coords,distance,duration){
        this.coords=coords;
        this.distance=distance;
        this.duration=duration;
        // this.date=...;
    }
}

class Running extends workout{
    constructor(coords,distance,duration,cardence){
        super(coords,distance,duration)
        this.cardence=cardence;
        this.calcPace();
    }
    calcPace(){
        this.pace= this.duration/this.distance;
        return this.pace;
        
    }
}
class Cycling extends workout{
    constructor(coords,distance,duration,cardence,elevationGain){
        super(coords,distance,duration)
        this.cardence=cardence;
        this.elevationGain=elevationGain;
        this.clacSpped();
    }
    clacSpped(){
        this.speed= this.distance/(this.duration/60);
        return this.speed
    }
   
}

const run1= new Running([39,-12],5.2,24,178);
const cycle= new Cycling([39,-12],27,95,523);
// const = new Running([39,-12],5.2,24,178);
console.log(run1,cycle)

class App{
    #map;
    #mapEvent;

    constructor(){
        this._getPosition();
        form.addEventListener('submit',this._newWorkOut.bind(this));
            //Clear input Fields
        inputType.addEventListener('change',this._toggleElavationFieldd)
               
       

    };
    _getPosition(){

        // navigator.geolocation?.getCurrentPosition(this._loadMap,function (){

        //     alert('Could not get your position');
        // )}
        navigator.geolocation?.getCurrentPosition(this._loadMap.bind(this),function(){
            alert('Could not get your position  ')
        })
    }

    _loadMap(position){
            const { latitude } = position.coords;
            const { longitude } = position.coords;
            console.log(latitude, longitude);
            
            const coords=[latitude,longitude]
            this.#map = L.map('map').setView(coords, 17);
            L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            }).addTo(this.#map);
        
            // L.marker(coords).addTo(map)
            //     .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
            //     .openPopup();
        
            //Handling clicks on map
            this.#map.on('click',this._showForm.bind(this))
                    // this.#mapEvent=mapE;
                    // form.classList.remove('hidden')
                    // inputDistance.focus()
        
                    // console.log(mapEvent)
                    // const {lat,lng}=mapEvent.latlng;
                    // L.marker([lat,lng]).addTo(map)
                    // .bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:false,closeOnClick:false,className:'running-popup'})).setPopupContent('Hey Working Out')
                    //  .openPopup();
            // coming from leaflet libary
        
        };
    
    _showForm(mapE){
        this.#mapEvent=mapE;
        form.classList.remove('hidden')
        inputDistance.focus()
    }
    _toggleElavationFieldd(){
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden')
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden')
  
    }
    _newWorkOut(){
        e.preventDefault();
        inputDistance.value= inputDuration.value =inputCadence.value=inputElevation.value='';
        
        
        //Display marker
                const {lat,lng}=this.#mapEvent.latlng;
                L.marker([lat,lng]).addTo(this.#map)
                .bindPopup(L.popup({maxWidth:250,minWidth:100,autoClose:false,closeOnClick:false,className:'running-popup'})).setPopupContent('Hey Working Out').openPopup();
    }
}
const app = new App();


