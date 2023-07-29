const runOnce= function(){
    console.log('this will never run again ')
}
runOnce() ;

(function(){
    console.log('this will never run again ')
    const isPrivate=23;
})();

(()=> console.log('this will Also never run again '))
();

{
    const isPrivate=23;
    var notPrivate=46;
}
console.log(notPrivate)