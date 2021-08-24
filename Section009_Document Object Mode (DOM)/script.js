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

// const btns = document.querySelectorAll('.btn')
// const titr = document.querySelector('#h')

// btns.forEach(element => {
//     element.addEventListener('mouseover',() => {
//         // element.style.background = (element.style.background == 'red') ? 'blue' :  'red'
//         // element.style.background = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
//         titr.innerHTML =   element.innerHTML
//         // titr.style.background =    element.style.background
//         element.classList.add('blue')
//     })
//     element.addEventListener('click',() => {
//         element.classList.remove('blue')
//     })
// });

// *****************************************************************************

// const titr = document.querySelector('#h')

// console.log(titr.style)

// titr.style.fontSize = '3rem'
// titr.style.border = '5px solid red '

// console.log(window.getComputedStyle(titr).fontSize)

// const btnadd = document.querySelector('.btnadd')
// const btnsub = document.querySelector('.btnsub')

// console.log(typeof(window.getComputedStyle(titr).fontSize))

// let currentSize = window.getComputedStyle(titr).fontSize
// console.log(currentSize)

// currentSize = parseInt(currentSize.substr(0, currentSize.length - 2))
// console.log(currentSize )

// btnadd.addEventListener('click', () => {
//     //
//     let currentSize = window.getComputedStyle(titr).fontSize
//     currentSize = parseInt(currentSize.substr(0, currentSize.length - 2))
//     console.log(currentSize )
//     titr.style.fontSize = currentSize + 1 + 'px'
// })

// btnsub.addEventListener('click', () => {
//     //
//     let currentSize = window.getComputedStyle(titr).fontSize
//     currentSize = parseInt(currentSize.substr(0, currentSize.length - 2))
//     console.log(currentSize )
//     titr.style.fontSize = currentSize - 1 + 'px'
// })

// *****************************************************************************

// Form

// const username = document.querySelector('#username')
// const password = document.querySelector('#password')
// const submitBtn = document.querySelector('#submitBtn')

// username.addEventListener('change',() => {
//     console.log('change event')
// })

// username.addEventListener('input',() => {
//     console.log('input event')
// })

// username.addEventListener('focus',() => {
//     console.log('focus event')
// })

// username.addEventListener('blur',() => {
//     console.log('blur event')
// })

// submitBtn.addEventListener('click', (e) => {
//     e.preventDefault()
//     console.log(Date.now()+ String(Math.ceil(Math.random()*1000000000000000000)))
// })

// Keyboard events

document.body.addEventListener('keydown',(e) => {
    console.log('keydown for => ' +e.keyCode)
    
})

document.body.addEventListener('keyup',(e) => {
    console.log('keyup for => ' +e.keyCode)

})

document.body.addEventListener('keypress',(e) => {
    console.log('keypress for => ' +e.keyCode)

})