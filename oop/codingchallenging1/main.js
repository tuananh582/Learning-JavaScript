const Car = function(make,speed){
    this.make=make;
    this.speed=speed;

}
Car.prototype.accelerate = function(){
   console.log(`${this.make} is going at ${this.speed+=10} km/h`)
};
Car.prototype.break = function(){
    console.log(`${this.make} is going at ${this.speed-=5} km/h`);
};
const bmw= new Car('BMW',120);
const mec= new Car('Mercedecs',95);

bmw.accelerate()
bmw.accelerate()
bmw.break()
bmw.accelerate()



