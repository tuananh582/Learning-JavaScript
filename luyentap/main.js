const modal=document.querySelector('.modal')
const Uclosemodal=document.querySelector('.close-modal')
const showmodal= document.querySelectorAll('.show-modal')
const openmodal=()=>{
    console.log('button clicked')
    modal.classList.remove('hidden')
}

const closemodal=()=>{
    modal.classList.add('hidden')
}
for(let i =0;i<showmodal.length;i++)
{
    showmodal[i].addEventListener('click',openmodal)
       
    Uclosemodal.addEventListener('click',closemodal)

    // console.log('button clicked')

}
document.addEventListener('keydown',function(e){
    if(e.key==='Escape'&& !modal.classList.contains('hidden')){
        closemodal()
    }
})
