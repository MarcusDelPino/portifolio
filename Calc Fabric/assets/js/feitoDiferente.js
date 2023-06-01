function criaCalculadora() {
  // fabric function
  return {
    //abro um obj
    display: document.querySelector(".display"), // chamo o display

    inicia() {
      //crio uma funçao para iniciar o chamado
      this.cliqueBotoes(); //func de click
      this.pressionaBackSpace(); //apagar com o teclado
      this.pressionaEnter(); //fazer o calculo com enter
    },

    pressionaBackSpace() {
      //criei uma func para apagar com o teclado
      this.display.addEventListener("keydown", (e) => {
        // fiz um evento com keydown
        if (e.keyCode === 8) {
          //fiz o evento idenficar o keyCode
          e.preventDefault(); //previne para que ele não apague no keyUP
          this.apagaUm(); //func apagar uma tecla de cada vez.
        }
      });
    },

    pressionaEnter() {
      // criei uma func para realizar equacao com enter
      this.display.addEventListener("keyup", (e) => {
        //criei um evento para pegar o keyUp
        if (e.keyCode === 13) {
          // condicionau para achar o keyCode
          this.realizaConta(); // func para realizar conta
        }
      });
    },

    realizaConta() {
      //funcao que vai realizar contas
      let conta = this.display.value; // criei uma variavel para para pegar tudo que estiverno display

      try {
        //faco um try catch
        conta = eval(conta); // resolvo a conta atravesdo eval

        if (!conta) {
          // condicional caso a a conta não seja digitada
          alert("Conta inválida"); // alert avisando
          return;
        }

        this.display.value = String(conta); //retorna no display a resposta
      } catch (e) {
        //catch caso a conta nao seja possivel
        alert("Conta inválida"); //alert avisando
        return;
      }
    },

    clearDisplay() {
      // func para apagar tudo
      this.display.value = ""; // display fica zerado
    },

    apagaUm() {
      this.display.value = this.display.value.slice(0, -1); //apaga a ultima entrada
    },

    cliqueBotoes() {
      // clique é onde reconhece todos as entradas.
      document.addEventListener("click", (e) => {
        //criei um evento click com target
        const el = e.target;

        if (el.classList.contains("btn-num")) {
          //condicional para conferir se tem uma classe
          this.btnParaDisplay(el.innerText); //se tiver ele aciona uma function
        }

        if (el.classList.contains("btn-clear")) {
          //condicional para conferir se tem uma classe
          this.clearDisplay(); //se tiver ele aciona uma function
        }

        if (el.classList.contains("btn-del")) {// confere se tem a classe
          this.apagaUm();//aciona a function
        }

        if (el.classList.contains("btn-eq")) { //confere se tem a classe
          this.realizaConta();// aciona a açao
        }

        this.display.focus(); // sempre volta para o display
      });
    },

    btnParaDisplay(valor) {//faz add dos valores e dos itens
      this.display.value += valor//junta tudo e disponibliza para realizar a conta
    },
  };
}

const calculadora = criaCalculadora();
calculadora.inicia();
