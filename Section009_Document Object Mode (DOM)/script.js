//  const btns = document.querySelectorAll('.btn')

//  btns.forEach((btn) => {
     
//     btn.style.background = 'red' 
//     setInterval(() => { 
//        btn.style.background = (btn.style.background == 'red') ? 'blue' : 'red' 
//     }, Math.random()*3000) 

//  })

// *****************************************************************************


// const titr = document.querySelector('#h')

// titr.style.backgroundColor = 'aqua'
// titr.style.fontSize = '18px'

// console.log(titr.style.background)

// const interval = setInterval(() => {
    
//     if(titr.style.fontSize < '60px') {
//         // console.log(titr.style.fontSize)
//         let size = String(titr.style.fontSize).split('px')
//         console.log(typeof(size[0]))
//         let finalsize = parseInt(size[0])+ 2
//         console.log(finalsize)
//         titr.style.fontSize = finalsize + 'px'
//     }
    
// }, 1000)


// *****************************************************************************

const btns = document.querySelectorAll('.btn')
const titr = document.querySelector('#h')

btns.forEach(element => {
    element.addEventListener('mouseover',() => {
        // element.style.background = (element.style.background == 'red') ? 'blue' :  'red'
        // element.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
        titr.innerHTML =   element.innerHTML
        // titr.style.background =    element.style.background
        element.classList.add('blue')
    })
    element.addEventListener('click',() => {
        element.classList.remove('blue')
    })
});

