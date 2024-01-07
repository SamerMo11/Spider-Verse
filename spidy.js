window.addEventListener('scroll',reveal);

function reveal(){
  var reveals = document.querySelectorAll('.reveal');

  for(var i = 0; i < reveals.length ; i++){

    let windowheight = window.innerHeight;
    let revealtop = reveals[i].getBoundingClientRect().top;
    let revealpoint = 100;

    if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
    }
    else{
      reveals[i].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------
window.addEventListener('scroll',left);

function left(){
  var lefts = document.querySelectorAll('.left');

  for(var l = 0; l < lefts.length ; l++){

    let windowheight = window.innerHeight;
    let revealtopp = lefts[l].getBoundingClientRect().top;
    let revealpointt = 100;

    if(revealtopp < windowheight - revealpointt){
      lefts[l].classList.add('active');
    }
    else{
      lefts[l].classList.remove('active');
    }
  }
}

// ----------------------------------------------------------


window.addEventListener('scroll',right);

function right(){
  var rights = document.querySelectorAll('.right');
  
  for(var r = 0; r < rights.length ; r++){
    
    let windowheight = window.innerHeight;
    let revealtoppp = rights[r].getBoundingClientRect().top;
    let revealpointtt = 100;
    
    if(revealtoppp < windowheight - revealpointtt){
      rights[r].classList.add('active');
    }
    else{
      rights[r].classList.remove('active');
    }
  }
}
// ----------------------------------------------------------

let arr = document.getElementById('arrow');

window.onscroll = function(){
    if(scrollY >= 740)
    {
        arr.style.display ='block';
    }else{
        arr.style.display ='none';
    }
}
// ----------------------------------------------------------
// ----------------------------------------------------------
// let moonn = document.getElementById('moon');
// let sunn = document.getElementById('sun');

// moonn.addEventListener('click', function(){

//     document.body.classList.remove('light');
//     document.body.style.background=' #000000e3';
//     this.style.display='none';
//     sunn.style.display='block';

// })

// sunn.addEventListener('click', function(){

//     document.body.classList.add('light');
//     document.body.style.background=' #e2e4e7';

//     this.style.display='none';
//     moonn.style.display='block';
// })
// ----------------------------------------------------------
// ----------------------------------------------------------

let first = document.getElementsByClassName('first');
let second = document.getElementsByClassName('second');
let third = document.getElementsByClassName('third');
let fourth = document.getElementsByClassName('fourth');
let card1 = document.getElementsByClassName('card1');
let card2 = document.getElementsByClassName('card2');
let card3 = document.getElementsByClassName('card3');
let card4 = document.getElementsByClassName('card4');

let trailer1 = document.getElementsByClassName('trailer1');
let trailer2 = document.getElementsByClassName('trailer2');
let trailer3 = document.getElementsByClassName('trailer3');
let trailer4 = document.getElementsByClassName('trailer4');
let trailer5 = document.getElementsByClassName('trailer5');
let trailer6 = document.getElementsByClassName('trailer6');
let trailer7 = document.getElementsByClassName('trailer7');
let trailer8 = document.getElementsByClassName('trailer8');

let btn1 = document.getElementsByClassName('btn1');
let btn2 = document.getElementsByClassName('btn2');
let btn3 = document.getElementsByClassName('btn3');
let btn4 = document.getElementsByClassName('btn4');
let btn5 = document.getElementsByClassName('btn5');
let btn6 = document.getElementsByClassName('btn6');
let btn7 = document.getElementsByClassName('btn7');
let btn8 = document.getElementsByClassName('btn8');




for(let a=0 ; a<first.length; a++){
    first[a].onclick = function(){
        card1[a].style.display = 'flex';  
        card2[a].style.display = 'none';  
        card3[a].style.display = 'none';  
        card4[a].style.display = 'none';  
}
}
for(let b=0 ; b<first.length; b++){
    second[b].onclick = function(){
        card2[b].style.display = 'flex';  
        card1[b].style.display = 'none';    
        card3[b].style.display = 'none';  
        card4[b].style.display = 'none';  
}
}
for(let c=0 ; c<first.length; c++){
    third[c].onclick = function(){
        card3[c].style.display = 'flex';  
        card1[c].style.display = 'none';  
        card2[c].style.display = 'none';  
        card4[c].style.display = 'none';  
}
}
for(let d=0 ; d<first.length; d++){
    fourth[d].onclick = function(){
        card4[d].style.display = 'flex';  
        card1[d].style.display = 'none';  
        card2[d].style.display = 'none';  
        card3[d].style.display = 'none';  
}
}


for(let t1=0 ; t1<first.length; t1++){
  btn1[t1].onclick = function(){ 
      trailer1[t1].style.opacity = '1';  
}
}
for(let t2=0 ; t2<first.length; t2++){
  btn2[t2].onclick = function(){ 
      trailer2[t2].style.opacity = '1';  
}
}
for(let t3=0 ; t3<first.length; t3++){
  btn3[t3].onclick = function(){ 
      trailer3[t3].style.opacity = '1';  
}
}
for(let t4=0 ; t4<first.length; t4++){
  btn4[t4].onclick = function(){ 
      trailer4[t4].style.opacity = '1';  
}
}
for(let t5=0 ; t5<first.length; t5++){
  btn5[t5].onclick = function(){ 
      trailer5[t5].style.opacity = '1';  
}
}
for(let t6=0 ; t6<first.length; t6++){
  btn6[t6].onclick = function(){ 
      trailer6[t6].style.opacity = '1';  
}
}
for(let t7=0 ; t7<first.length; t7++){
  btn7[t7].onclick = function(){ 
      trailer7[t7].style.opacity = '1';  
}
}
for(let t8=0 ; t8<first.length; t8++){
  btn8[t8].onclick = function(){ 
      trailer8[t8].style.opacity = '1';  
}
}
