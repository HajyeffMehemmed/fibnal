// const inc=document.querySelector('.icn')
// const drop=document.querySelector('.drop')
// // inc.addEventListener('click',()=>{
// // drop.style.opacity='1'

// // })
// // inc.addEventListener('click',()=>{
// //     drop.classList.toggle('toggle')
// // })
const sliderLeftBtn = document.querySelector('#sliderLeftBtn');
const sliderRightBtn = document.querySelector('#sliderRightBtn');


// const sliderContainer=document.querySelector('#sliderContainer')
fetch('./db/slider_for_images.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach((foto, i) => {
            sliderContainer.innerHTML += `    
            <div class="slider_card">
            <img src="${foto.foto}" alt="">
        </div>`                                      });
    })
const sliderContainerTwo = document.querySelector('#sliderContainerTwo')

fetch("/db/slider_for_images.json")
    .then(resp => resp.json())
    .then(a => {
        console.log(a)
        a.forEach((foto, i) => {
            sliderContainerTwo.innerHTML += `
                <div class="slider_card">
                <img src="${foto.foto}" alt="">
            </div>`

        })
    })









// const container = document.querySelector('#container');

// let count = 0;
// function slide() {
//     for (let i = 0; i < container.children.length; i++) {
//         container.children[i].style.transform = `translateX(-${x * container.offsetWidth}px)`
//     }
// }
// setInterval(() => {
//     if (count < container.children.length - 1) {
//         count++;
//         slide();
//     } else {
//         count = 0;
//         slide();
//     }
//     console.log('salam')

// },
//     1000);

// sliderLeftBtn.addEventListener('click', () => {
//     if (count > 0) {
//         count--;
//         slide();
//     } else {
//         count = 0;
//         slide();
//     }
// })
// sliderRightBtn.addEventListener('click', () => {
//     if (count < popularMoviesContainer.children.length - 4) {
//         count++;
//         slide();
//     } else {
//         count = 0;
//         slide();
//     }

// })
const slider_container = document.querySelector('#sliderContainer');
const test = document.querySelector('#test');
console.log(slider_container.offsetWidth)
// offsetWidth

let x = 0;
function sldr(container) {
    console.log(container)
    setInterval(() => {
        x++
        for (let i = 0; i < container.children.length; i++) {
            container.children[i].style.transform = `translateX(-${x * container.offsetWidth}px)`

        }
        console.log('salam')
        if (x === container.children.length) {
            x = 0
        }
    }, 4000)
}
sldr(slider_container)
