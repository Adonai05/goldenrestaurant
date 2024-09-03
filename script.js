function filterImg(type){
    const allFood = document.getElementsByClassName('food');

     for (let i = 0;i < allFood.length;i++){
        allFood[i].style.display = 'none';
    } 
    if (type === 'ALL') {
        for (let i = 0;i < allFood.length+1;i++){
            allFood[i].style.display = 'block';
        }
    }
    else {
        const selectedFood = document.getElementsByClassName(type);
        for (let i = 0;i < selectedFood.length+1;i++){
            selectedFood[i].style.display = 'block';
        }
    }
}
var menulist = document.getElementsByClassName('menulist');
function bars() {
    
const bars = document.getElementsByClassName('bars');
const fbutton = document.getElementsByClassName('fbutton');
const mbutton = document.getElementsByClassName('mbutton');
const lbutton = document.getElementsByClassName('lbutton');
     for (let i = 0;i < menulist.length;i++){
        menulist[i].classList.toggle('list');
    } 
    for (let i = 0;i < fbutton.length;i++){
        fbutton[i].classList.toggle('ffbutton');
    } 
    for (let i = 0;i < mbutton.length;i++){
        mbutton[i].classList.toggle('mmbutton');
    } 
    for (let i = 0;i < lbutton.length;i++){
        lbutton[i].classList.toggle('llbutton');
    } 
  }

