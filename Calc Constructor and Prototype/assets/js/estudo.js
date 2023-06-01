function Calculator() {
  this.display = document.querySelector(".display");// sempre usar this.
  // const btn = document.querySelector('.btn')

  this.init = () => {
    this.buttonClick();
    this.pressEnter()
  };

  this.pressEnter = () => {
    this.display.addEventListener('keyup', (e) => {// pegar o evento da tela
      if(e.keyCode === 13){
        this.calc()
      }
    })
  }

  this.buttonClick = () => {
    document.addEventListener("click", (e) => {
      const el = e.target;
      if (el.classList.contains("btn-num")) {
        // console.log(el.innerText)
        this.showInDisplay(el.innerText);
      }
      if (el.classList.contains("btn-clear")) {
        this.clear();
      }
      if (el.classList.contains("btn-del")) {
        this.clearLastOne();
      }
      if (el.classList.contains('btn-eq')) {
        this.calc()
      }
      this.display.focus()
    });
  };

  this.showInDisplay = (valot) => {
    this.display.value += valot;
  };
}

const calculator = new Calculator();
calculator.init()

Calculator.prototype.clearLastOne = function () {
  this.display.value = this.display.value.slice(0, -1)//prestar atençao
}

Calculator.prototype.clear = function () {
  this.display.value = ""
}

Calculator.prototype.calc = function(){
  let conta = this.display.value

  
  try {
    if(!conta){
      alert('Conta não existe')
    }else {
      conta = eval(conta)
      this.display.value = String(conta)
    }
    
  } catch (error) {
    alert('Conta não existe')
    
  }

}