// const inc=document.querySelector('.icn')
// const drop=document.querySelector('.drop')
// // inc.addEventListener('click',()=>{
// // drop.style.opacity='1'

// // })
// // inc.addEventListener('click',()=>{
// //     drop.classList.toggle('toggle')
// // })

const leftBtn = document.querySelector("#leftBtn");
const rightBtn = document.querySelector('#rightBtn')
//////////////////////////////////////////////////Three

////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////

const slider_container = document.querySelector('#sliderContainer');


const sliderContainerTwo = document.querySelector('#sliderContainerTwo')
const sliderContainerThree = document.querySelector('#sliderContainerThree')
const sliderTwoContainer = document.querySelector('#sliderTwoContainer')
const sliderContainerFour = document.querySelector('#sliderContainerFour')
const regContiner=document.querySelector("#regContiner");
 const reqBtn=document.querySelector('#reqBtn')
//////
const name=document.querySelectorAll('#name')
const email=document.querySelectorAll('#email')
const number=document.querySelectorAll('#number')
const inter=document.querySelectorAll('#inter')
const message=document.querySelectorAll('#message')
//////
// const sliderContainer=document.querySelector('#sliderContainer')
fetch('./db/slider_for_images.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data)
        data.forEach((foto, i) => {
            slider_container.innerHTML += `    
            <div class="slider_card">
            <img src="${foto.foto}" alt="">
        </div>`
            sliderBtn.innerHTML += ` 
        <button>${foto.title}</button>
        
        `  });
    })
const sliderBtnTwo = document.querySelector('.sliderBtnTwo')

fetch('./db/slider_for_images.json')
    .then(resp => resp.json())
    .then(a => {
        console.log(a)
        a.forEach((foto, i) => {
            sliderContainerTwo.innerHTML += `
                <div class="slider_card">
                <img src="${foto.foto}" alt="">
            </div>`
            sliderBtnTwo.innerHTML += ` 
            <button>${foto.title}</button>
        
            `
        })
    })
const sliderBtnTree = document.querySelector('.sliderBtnTree')
fetch('./db/slider_for_images.json')
    .then(resp => resp.json())
    .then(a => {
        console.log(a)
        a.forEach((foto, i) => {
            sliderContainerThree.innerHTML += `
                <div class="slider_card">
                <img src="${foto.foto}" alt="">
            </div>`
            sliderBtnTree.innerHTML += ` 
            <button>${foto.title}</button>
        
            `
        })
    })
const sliderBtnFour = document.querySelector('.sliderBtnFour')
fetch('./db/slider_for_images.json')
    .then(resp => resp.json())
    .then(a => {
        console.log(a)
        a.forEach((foto, i) => {
            sliderContainerFour.innerHTML += `
                <div class="slider_card">
                <img src="${foto.foto}" alt="">
            </div>`
            sliderBtnFour.innerHTML += ` 
            <button>${foto.title}</button>
        
            `
        })
    })
const test = document.querySelector('#test');
console.log(slider_container.offsetWidth)
// offsetWidth
let count = 0;
function slide() {
    for (let i = 0; i < slider_container.children.length; i++) {
        slider_container.children[i].style.transform = `translateX(${-687 * count}px)`
    }
}
setInterval(() => {
    if (count < slider_container.children.length) {
        count++;
        slide();
    } else {
        count = 0;
        slide();
    }
}, 4000);
leftBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
        slide();
    } else {
        count = 0
        slide();
    }
})
slide()
rightBtn.addEventListener('click', () => {
    if (count > 0) {
        count++
        slide();
    } else {
        count = 0
        slide();
    }
    1000
})
slide()
let countt = 0;
function slider() {
    for (let i = 0; i < sliderContainerTwo.children.length; i++) {
        sliderContainerTwo.children[i].style.transform = `translateX(${-687 * count}px)`
    }
}

setInterval(() => {
    if (count < sliderContainerTwo.children.length) {
        countt++;
        slider();
    } else {
        countt = 0;
        slider();
    }
}, 4000);
const leftBtnTow = document.querySelector("#leftBtnTow");
const rightBtnTow = document.querySelector('#rightBtnTow')
leftBtnTow.addEventListener('click', () => {
    if (count > 0) {
        count--
        slider();
    } else {
        count = 0
        slider();
    }
})
rightBtnTow.addEventListener('click', () => {
    if (count > 0) {
        count++
        slider();
    } else {
        count = 0
        slider();
    }
    
})
slider()
let counttt = 0;
function slid() {
    for (let i = 0; i < sliderContainerFour.children.length; i++) {
        sliderContainerFour.children[i].style.transform = `translateX(${-687 * count}px)`
    }
}
setInterval(() => {
    if (count < sliderContainerFour.children.length) {
        counttt++;
        slid();
    } else {
        counttt = 0;
        slid();
    }
}, 4000);
const leftBtnFour = document.querySelector("#leftBtnFour");
const rightBtnFour = document.querySelector('#rightBtnFour');
leftBtnFour.addEventListener('click', () => {
    console.log('salam')

    if (count > 0) {
        count--
        slid();
    } else {
        count = 0
        slid();
    }
})
rightBtnFour.addEventListener('click', () => {
    if (count > 0) {
        count++
        slid();
    } else {
        count = 0
        slid();
    }
})
slid()
let countttt = 0;
function sli() {
    for (let i = 0; i < sliderContainerThree.children.length; i++) {
        sliderContainerThree.children[i].style.transform = `translateX(${-687 * count}px)`
    }
}
setInterval(() => {
    if (count < sliderContainerThree.children.length) {
        countttt++;
        sli();
    } else {
        countttt = 0;
        sli();
    }
}, 4000);


const leftBtnThree = document.querySelector("#leftBtnThree");
const rightBtnThree = document.querySelector('#rightBtnThree')

leftBtnThree.addEventListener('click', () => {
    console.log('salam')

    if (count > 0) {
        count--
        sli();
    } else {
        count = 0
        sli();
    }
})
rightBtnThree.addEventListener('click', () => {
    if (count > 0) {
        count++
        sli();
    } else {
        count = 0
        sli();
    }
    1000
})
sli()
fetch('./db/slider_for_images.json')
    .then(resp => resp.json())
    .then(a => {
        console.log(a)
        a.forEach((foto, i) => {
            sliderTwoContainer.innerHTML += `
        <div class="left_card">
        <img src="${foto.foto}" alt="">
        <div class="slider_writers_rig">
            <h5>Estaing</h5>
            <p>France</p>
        </div>
    </div>

    <div class="center_card">
        <img src="${foto.foto}" alt="">

        <div class="slider_writers">
            <h5>Estaing</h5>
            <p>France</p>
        </div>

    </div>
    <div class="right_card">
        <img src="${foto.foto}" alt="">
        <div class="slider_writers_left">
            <h5>Estaing</h5>
            <p>France</p>
        </div>
    </div>
        `

        })
    })

let z = 0;
function sldiefer(sliderTwoContainer) {
    setInterval(() => {
        z++
        for (let i = 0; i < sliderTwoContainer.children.length; i++) {
            sliderTwoContainer.children[i].style.transform = `translateX(-${count * sliderTwoContainer.offsetWidth}px)`

        }
        if (z === sliderTwoContainer.children.length) {
            z = 0
        }
        {
            sldiefer()
        }
    }, 4000)
}
sldiefer(sliderTwoContainer)