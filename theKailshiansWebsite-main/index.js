//intro word one after one
let mainHeading = document.querySelector('.main-heading')
let string = 'Convert your Dream website into Reality'
for (let index = 0; index < string.length; index++ ) {
     setTimeout(() => {
        mainHeading.innerHTML += string[index]
 },index*120);
}

//animation
let animatedLine = document.querySelector('.animated-line')
let processDetails = document.querySelectorAll('.process-details')
let section = document.querySelector('section')
let process = document.querySelector('.process')
console.log(process.clientHeight);
function animation(){
setInterval(()=>{
  if(animatedLine.clientHeight <= 400){
      processDetails[4].classList.remove('animated-class')
      processDetails[0].classList.add('animated-class')
    }
    else if(animatedLine.clientHeight <= 800){
        processDetails[0].classList.remove('animated-class')
        processDetails[1].classList.add('animated-class')
}
 else if(animatedLine.clientHeight <= 1200){
    processDetails[1].classList.remove('animated-class')
    processDetails[2].classList.add('animated-class')
}
 else if(animatedLine.clientHeight <= 1600){
    processDetails[2].classList.remove('animated-class')
        processDetails[3].classList.add('animated-class')
}
 else if(animatedLine.clientHeight <= 2000){
    processDetails[3].classList.remove('animated-class')
    processDetails[4].classList.add('animated-class')
}
},1000)
}
animation()
window.onscroll  = ()=>{
    let Height = (window.scrollY - 1250 ) 
    if(window.scrollY > 1300  && window.scrollY < 3420){
         if((process.clientHeight)-50 >= Height){
             animatedLine.style.height = Height + 'px'
         }
    }
}


