class Test{
    constructor(teste){
        this.teste = teste
    
    
    }

    testando() {
        let cpfNovo = this.teste
        cpfNovo = cpfNovo.replace(/\D+/g, '')
        let cpfArray = Array.from(cpfNovo)
        console.log(cpfNovo)
        return cpfArray
    }

    realizar(){
        console.log(this.testando())
    }

}

//552.587.493-80
const t1 = new Test('552.587.493-80')

t1.realizar()