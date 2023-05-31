class ValidarCPf{
    constructor(nome){
        this.nome = nome
        this.cpfNumero = 'a'
        
    }
    
    set setarCpfNumero(valor){
        this.cpfNumero = valor
    }

    cpfSemPontos(){
        let cpfLimpo = this.cpfNumero.replace(/\D+/g, '')
        console.log(cpfLimpo)
        let cpfArray = Array.from(cpfLimpo)
        console.log(cpfArray)
        cpfArray.splice(-2, Number.MAX_VALUE)
        // console.log(cpfArray)
        return cpfArray
    }

    primeiroDigito(){
        let cpfSemPontos = this.cpfSemPontos()
        let primeiroDigito = cpfSemPontos.map((valor, indice) => valor * (10 - indice)).reduce((ac, valor) => ac += valor, 0)
        primeiroDigito = 11 - (primeiroDigito % 11)
        if (primeiroDigito >= 10) primeiroDigito = 0
        cpfSemPontos.push(primeiroDigito.toString())
        console.log(cpfSemPontos)
        return cpfSemPontos
        
    }
    
    segundoDigito(){
        let cpfSemPontos = this.primeiroDigito()
        let segundoDigito = cpfSemPontos.map((valor, indece) => valor * (11 - indece)).reduce((ac, valor) => ac += valor, 0)
        segundoDigito = 11 - (segundoDigito % 11)
        if (segundoDigito >= 10) segundoDigito = 0
        cpfSemPontos.push(segundoDigito.toString())
        console.log(cpfSemPontos)
        return cpfSemPontos
    }
    
    cpfFinal(){
        const container = document.querySelector('.res')
        let cpfSemPontos = this.segundoDigito()
        let cpfFinalSemPontos = cpfSemPontos.join('')
        cpfSemPontos.splice(3,0,'.')
        cpfSemPontos.splice(7,0,'.')
        cpfSemPontos.splice(11,0,'-')
        let cpfFinal = cpfSemPontos.join('')
        // console.log(cpfFinal)
        if (cpfFinal === this.cpfNumero || cpfFinalSemPontos === this.cpfNumero){
            console.log('CPF Validado!')
            container.innerHTML += `<p>${cpfFinal} - <strong class="valido">CPF Validado</strong></p>`
            
        }else{
            console.log('CPF NEGADO!')
            container.innerHTML += `<p>${cpfFinal} - <strong class="invalido">CPF NEGADO</strong></p>`
        }
        

    }

}

const vTest = new ValidarCPf('Meu CPF')
// vTest.cpfSemPontos()


function roxo() {
    // const container = document.querySelector('.container')
    const btn = document.querySelector('.btn-value')
    const inputValue = document.querySelector('.input-value')

    btn.addEventListener('click', () => {
        // console.log(inputValue.value)
        vTest.setarCpfNumero = inputValue.value
        vTest.cpfFinal()
    })
    
}
roxo()


// vTest.cpfFinal()

