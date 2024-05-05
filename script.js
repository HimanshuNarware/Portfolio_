// const { createElement } = require("react");
// console.log('is this working')
//Autotype JS code:
const dataset = ["Himanshu Narware..."];
let datasetIndex = 0;
let outputElement;
const pause = 1000;
const addTime = 150; // slower typing animation
const removeTime = 100; // slower removing animation
let letterIndex = 0;
let currentInterval;

function init() {
  outputElement = document.getElementById("autoType");
  textRotation();
}

function textRotation() {
  if (datasetIndex === dataset.length) {
    datasetIndex = 0;
  }
  const data = dataset[datasetIndex];
  letterIndex = 0;
  outputElement.className = "";
  currentInterval = setInterval(addLetter, addTime);
}

function addLetter() {
  outputElement.innerHTML += dataset[datasetIndex].charAt(letterIndex);
  letterIndex += 1;

  if (letterIndex > dataset[datasetIndex].length) {
    outputElement.className = "createAnimation";
    clearInterval(currentInterval);
    setTimeout(startRemove, pause);
  }
}

function startRemove() {
  currentInterval = setInterval(removeLetter, removeTime);
}

function removeLetter() {
  const currentString = outputElement.innerHTML;
  const newString = currentString.substring(0, currentString.length - 1);
  outputElement.innerHTML = newString;

  if (currentString.length < 1) {
    clearInterval(currentInterval);
    datasetIndex += 1;
    textRotation();
  } else {
    if (newString.length < 1) {
      clearInterval(currentInterval);
      setTimeout(startRemove, pause);
    }
  }
}

setTimeout(init, pause); // set the delay to pause instead



//  exprience column hideshow
let activeClass = document.getElementById('hide');

const btn_hide=document.getElementById('hidebtn')
btn_hide.addEventListener('click',()=>{
  activeClass.classList.toggle('active');
  btn_hide.classList.toggle('active-btn::after')
  btn_hide.classList.toggle('zindex')
  if(btn_hide.innerHTML==='More'){
    btn_hide.innerHTML="Less"
  }
  else{
    btn_hide.innerHTML="More"
  }

})

// experience section hidebutton
// let exp_hide_btn=document.querySelectorAll('.experience-hide-btn');
// exp_hide_btn.forEach((item,index)=>{
//   item.addEventListener('click',(e)=>{
//     // console.log(document.getElementsByTagName('li')[e].parentElement);
//   // e.target.parentElement. previousSibling.classList.toggle('hidden')
// // console.log(e.target.parentElement.previousElementSibling.innerHTML)
// e.target.parentElement.previousElementSibling.classList.toggle('hidden')
  
  



//   })
// })

//logic of more
// let more=document.getElementById('more')
// more.addEventListener('click',()=>{
//   // document.getElementById('box').classList.add('block')
//   // alert('windrow')
//   document.getElementById('box').classList.toggle('block')
// })


// education button

let edu_button=document.getElementById('edu-btn');
edu_button.addEventListener('click',(e)=>{
 document.querySelector('.education-section').classList.toggle('education-active')
})

// writing login for sibling
let  child1=document.querySelectorAll('.Wrapper-sib ')
let  child

const child2=document.querySelectorAll('.child-2')

console.log("child2")
console.log(child2)
for(let Click of child2){
  console.log(Click);
  console.log("is this workign")
  Click.addEventListener('click',(e)=>{
    e.target.previousElementSibling.classList.toggle('child-1-hide')
    console.log(e.target.previousElementSibling)
    if(Click.innerHTML==='More..')
    {
   Click.innerHTML='Less...'
    }
    else{
      Click.innerHTML='More..'
    }
    })
}



// ///wi
// const btn=document.querySelectorAll('.btn');

// // alert('hel')
// // console.log("is this working")

//btn
// const button=document.


// Fetch data from the API
// fetch('./Ex.json')
//   .then(response =>  response.json())
//   .then(data => {
//     // Once the JSON data is loaded, create box elements and display the data
//     const dataContainer = document.getElementById('dataContainer');

//     // Loop through each item in the data array
//     data.forEach(item => {
//       // Create a div element for each item
//       const infoBox = document.createElement('div');
//       infoBox.classList.add('info-box');

//       // Create and add content to the div element
//       const nameHeading = document.createElement('h2');
//       nameHeading.textContent = item.Role;
//       const images=document.createElement('img');
//       images.src=item.image;
//       images.classList.add('info-box-img');
//       const addressParagraph = document.createElement('p');
//       addressParagraph.textContent = item.Company;
    
    
// //           // parent ele
// const parentDiv=document.createElement('div');
// parentDiv.classList.add('parentDiv');

// // // button 

// const btn=document.createElement('btn');
// btn.classList.add('btn');
// // btn.classList.add('child2');
// btn.textContent='More..';

// // sibling of the button
// const siblingDiv=document.createElement('section');
// //p element
// const p1=document.createElement('p')
// p1.textContent=item.desc.a;
// const p2=document.createElement('p')
// p2.textContent=item.desc.b;
// const p3=document.createElement('p')
// p3.textContent=item.desc.c;
// // //appending content to the siblling div
// siblingDiv.appendChild(p1);
// siblingDiv.appendChild(p2);
// siblingDiv.appendChild(p3);
// siblingDiv.classList.add('hide-Section')

// // //appending content to the parent div
// parentDiv.appendChild(siblingDiv);
// parentDiv.appendChild(btn);



//       // Append content to the div element
//       infoBox.appendChild(images);
//       infoBox.appendChild(nameHeading);
//       infoBox.appendChild(addressParagraph);
//       infoBox.appendChild(parentDiv);
      

//       // Append the div element to the data container
//       dataContainer.appendChild(infoBox);
     
//     });
//   })
//   .catch(error => {
//     console.error('Error fetching data:', error);})
// .finally(f=>{
//   // console.log("is")
//   const button=document.querySelectorAll('.btn');
//   console.log(button)
// })

// for(let btn of button){
//   console.log("is this wokring")
// console.log(btn)
// }

    ///

   
    
    