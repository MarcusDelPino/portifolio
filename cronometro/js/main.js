const btnStart = document.querySelector('.btn-start')
const btnPause = document.querySelector('.btn-pause')
const btnZero = document.querySelector('.btn-zero')
const visor = document.querySelector('.valor-visor')


let hora = 0
let minuto = 0
let segundo = 0
let tempo = 1000
let cron

function timer() {
    let format = `${hora < 10 ? `0${hora}`: hora}:${minuto < 10 ? `0${minuto}`: minuto}:${segundo < 10 ? `0${segundo}`: segundo}`
    visor.innerHTML = format
    segundo++
    if (segundo > 60){
        minuto++
        segundo = 0
    }else if (minuto > 60){
        hora++
        minuto = 0
    }
}

btnStart.addEventListener('click', cliqueIniciar = () => {

    cron = setInterval(() => { timer() }, tempo)
    btnStart.disabled = true


})

btnPause.addEventListener('click', cliquePause = () => {
    clearInterval(cron)
    btnStart.disabled = false
})

btnZero.addEventListener('click', cliqueZero = () => {
    clearInterval(cron)
    hora = 00
    minuto = 00
    segundo = 00
    let format = `${hora < 10 ? `0${hora}`: hora}:${minuto < 10 ? `0${minuto}`: minuto}:${segundo < 10 ? `0${segundo}`: segundo}`
    visor.innerHTML = format
})
