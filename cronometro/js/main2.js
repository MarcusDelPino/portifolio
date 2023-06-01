function Cronomentro(){
    const btnStart = document.querySelector('.btn-start')
    const btnPause = document.querySelector('.btn-pause')
    const btnZero = document.querySelector('.btn-zero')
    const visor = document.querySelector('.valor-visor')
    
    let ss = 0
    let mm = 0
    let hh = 0
    const timer = 1000
    let cron
    
    this.timerStart = () => {
        let format = `${hh < 10 ? `0${hh}` : hh }:${mm < 10 ? `0${mm}` : mm}:${ss < 10 ? `0${ss}` : ss}`
        visor.innerHTML = format
        ss++
        if (ss ===60) {
            mm++
            ss = 0
        }
        if (mm===60) {
            hh++
            mm=0
        }

    }

    this.iniciar = () => {

        btnStart.addEventListener('click', ()=>{
            console.log('Iniciei!')
            cron = setInterval(() => { this.timerStart() }, timer)
            btnStart.disabled = true
            btnStart.style.color = 'green'
            btnPause.style.color = 'white'
            btnZero.style.color = 'white'
            
        })
        
        btnPause.addEventListener('click', ()=>{
            btnStart.disabled = false
            clearInterval(cron)
            console.log('Pausei!')
            btnStart.style.color = 'white'
            btnPause.style.color = 'red'
            btnZero.style.color = 'white'
        })
        
        btnZero.addEventListener('click', ()=>{
            console.log('Zerei!')
            clearInterval(cron)
            btnStart.disabled = false
            ss = 0
            mm = 0
            hh = 0
            visor.innerHTML = `00:00:00`
            btnStart.style.color = 'white'
            btnPause.style.color = 'white'
            
            let blink = setInterval(() => { btnZero.style.color = 'blue'}, 1)

            setTimeout(() => {
                clearInterval(blink)
                btnZero.style.color = 'white'

            }, 2000)
        })

    }


    
}

const c1 = new Cronomentro()
c1.iniciar()