const number = document.querySelector('#time')
const btn = document.querySelector('.btn')
const ISO = document.querySelector('.ISO')
const UTC = document.querySelector('.UTC')
const yearsAgo = document.querySelector('.yearsAgo')
const secondsAgo = document.querySelector('.secondsAgo')
const Local = document.querySelector('.Local')


btn.addEventListener('click', () => {
    if (number.value.trim()) {
        const value = Number(number.value.trim())
        const date = new Date(value)
        
        ISO.innerText = date.toISOString()
        UTC.innerText = date.toUTCString()
        Local.innerText = date
        yearsAgo.innerText = new Date().getFullYear() - date.getFullYear() + ' yearsAgo'
        secondsAgo.innerText = Math.floor((Date.now() - value)/1000) + ' secondsAgo'

    }
})