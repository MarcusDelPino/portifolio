class Formulario {
  constructor(nome, sobrenome, cpf, usuario, senha, confirmaSenha) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.cpf = cpf;
    this.usuario = usuario;
    this.senha = senha;
    this.confirmaSenha = confirmaSenha;

    this.form = document.querySelector(".form");
    this.inpNome = this.form.querySelector("#input-nome");
    this.inpSobrenome = this.form.querySelector("#input-sobrenome");
    this.inpCpf = this.form.querySelector("#input-cpf");
    this.inpUsuario = this.form.querySelector("#input-usuario");
    this.inpSenha = this.form.querySelector("#input-senha");
    this.inpConfirmaSenha = this.form.querySelector("#input-confirma-senha");
    this.inpFull = this.form.querySelectorAll(".full");
  }

  iniciar() {
    // console.log(this.nome, this.sobrenome, this.cpf, this.usuario, this.senha, this.confirmaSenha)
    this.nomeRecebido();
    this.sobrenomeRecebido();
    this.cpfRecebido();
    this.usuarioRecebido();
    this.senhaRecebido();
    this.confirmaSenhaRecebido();
  }

  nomeRecebido() {
    const erroNome = document.querySelector(".erroNome");
    // console.log('aqui', nome)
    if (this.nome === "") {
      erroNome.innerHTML = `Você precisa preencher seu nome`;
      this.inpNome.focus();
      this.inpNome.addEventListener("keyup", () => {
        erroNome.innerHTML = "";
      });
    } else {
      // this.inpNome.placeholder = `${this.nome}`
      this.inpNome.disabled = true;
      erroNome.innerHTML = `<p>Campo autenticado! &#9989</p>`;
    }
  }

  sobrenomeRecebido() {
    const erroSobrenome = document.querySelector(".erroSobrenome");
    // console.log('aqui', nome)
    if (this.sobrenome === "") {
      erroSobrenome.innerHTML = `Você precisa preencher seu sobrenome`;
      this.inpSobrenome.focus();
      this.inpSobrenome.addEventListener("keyup", () => {
        erroSobrenome.innerHTML = "";
      });
    } else {
      this.inpSobrenome.disabled = true;
      erroSobrenome.innerHTML = `<p>Campo autenticado! &#9989</p>`;
    }
  }

  cpfRecebido() {
    let cpfLimpo = this.cpf.replace(/\D+/g, "");
    let cpfArray = Array.from(cpfLimpo);
    cpfArray.splice(-2, Number.MAX_VALUE);
    let digitoUm = Formulario.cpfPrimeiroDigito(cpfArray);
    cpfArray.push(digitoUm);
    let digitoDois = Formulario.cpfSegundoDigito(cpfArray);
    cpfArray.push(digitoDois);
    let cpfFinal = cpfArray.join("");
    // console.log(cpfFinal);

    const erroCpf = document.querySelector(".erroCpf");
    // console.log('aqui', nome)
    if (this.cpf === "" || this.cpf.length < 11) {
      erroCpf.innerHTML = `Você precisa preencher seu Cpf completo`;
      this.inpCpf.focus();
      this.inpCpf.addEventListener("keyup", () => {
        erroCpf.innerHTML = "";
      });
    } else if (cpfLimpo !== cpfFinal) {
      erroCpf.innerHTML = `Cpf inválido!`;
      this.inpCpf.focus();
      this.inpCpf.addEventListener("keyup", () => {
        erroCpf.innerHTML = "";
      });
    }else {
        this.inpCpf.disabled = true
        erroCpf.innerHTML = `<p>Campo autenticado! &#9989</p>`
    }
  }

  static cpfPrimeiroDigito(cpfEnviado) {
    let primeiroDigito = cpfEnviado;
    primeiroDigito = primeiroDigito
      .map((valor, ind) => valor * (10 - ind))
      .reduce((ac, valor) => {
        return (ac += valor);
      }, 0);
    primeiroDigito = 11 - (primeiroDigito % 11);
    if (primeiroDigito >= 10) primeiroDigito = 0;
    // console.log(primeiroDigito)
    return primeiroDigito.toString();
  }

  static cpfSegundoDigito(cpfEnviado) {
    let segundoDigito = cpfEnviado;
    segundoDigito = segundoDigito
      .map((valor, ind) => valor * (11 - ind))
      .reduce((ac, valor) => {
        return (ac += valor);
      }, 0);
    segundoDigito = 11 - (segundoDigito % 11);
    if (segundoDigito >= 10) segundoDigito = 0;
    // console.log(segundoDigito)
    return segundoDigito.toString();
  }

  usuarioRecebido() {
    const erroUsuario = document.querySelector(".erroUsuario");
    // console.log('aqui', nome)
    let usuario = this.usuario
    let valido =this.validar(usuario)
    // console.log(valido)
    if (this.usuario === "" || this.usuario.length < 3 || this.usuario.length > 13) {
      erroUsuario.innerHTML = `Você precisa preencher seu nome de usuário`;
      this.inpUsuario.focus();
      this.inpUsuario.addEventListener("keyup", () => {
        erroUsuario.innerHTML = "";
      });
    }else if (!valido || this.usuario.length < 3 && this.usuario.length > 13){
        // console.log('false')
        erroUsuario.innerHTML = `Caracter não permitido`;
      this.inpUsuario.focus();
      this.inpUsuario.addEventListener("keyup", () => {
        erroUsuario.innerHTML = "";
      });
    }else {
        this.inpUsuario.disabled = true
        erroUsuario.innerHTML = `<p>Campo autenticado! &#9989</p>`
    }
  }

  senhaRecebido() {
    const erroSenha = document.querySelector(".erroSenha");
    let validador = this.validadorSenha()
    // console.log('aqui', nome)
    if (this.senha === "") {
      erroSenha.innerHTML = `Você precisa preencher sua senha`;
      this.inpSenha.focus();
      this.inpSenha.addEventListener("keyup", () => {
        erroSenha.innerHTML = "";
      });
    }else if (this.confirmaSenha === ""){
      erroSenha.innerHTML = `Você precisa confirmar a senha no campo abaixo.`
    }else if (!validador){
      erroSenha.innerHTML = `Senhas não são correspondentes!<br>`
      erroSenha.innerHTML += `Senhas devem tem entre 6 e 12 caracteres!`
    }else {
      this.inpSenha.disabled = true
      erroSenha.innerHTML = `<p>Campo autenticado! &#9989</p>`
    }
  }

  confirmaSenhaRecebido() {
    const erroConfirmaSenha = document.querySelector(".erroConfirmaSenha");
    let validador = this.validadorSenha()
    // console.log('aqui', this.confirmaSenha)  
    if (this.confirmaSenha === "") {
      erroConfirmaSenha.innerHTML = `Você precisa confirmar a senha`;
      this.inpConfirmaSenha.focus();
      this.inpConfirmaSenha.addEventListener("keyup", () => {
        erroConfirmaSenha.innerHTML = "";
      });
    }else if (this.senha === ""){
      erroConfirmaSenha.innerHTML = `Você precisa criar uma senha no campo acima`
    }else if (!validador){
      erroConfirmaSenha.innerHTML = `Senhas não são correspondentes!<br>`
      erroConfirmaSenha.innerHTML += `Senhas devem tem entre 6 e 12 caracteres!`
    }else {
      this.inpConfirmaSenha.disabled = true
      erroConfirmaSenha.innerHTML = `<p>Campo autenticado! &#9989</p>`
    }
  }

  validadorSenha(){
    let senha = this.senha
    let confirma = this.confirmaSenha
    let confirmacao = true
    if (senha.length < 6 || senha.length > 12){
      return confirmacao = false
    }



    return senha === confirma ? confirmacao = true : confirmacao = false
    // console.log(confirmacao)

  }

  validar(text) {
    let regex = /^[a-zA-Z0-9 ]+$/;

    if (regex.test(text)) {
      return true;
    } else {
      return false;
    }
  }

  
}

function submitInit() {
  const form = document.querySelector(".form");
  const inpNome = form.querySelector("#input-nome");
  const inpSobrenome = form.querySelector("#input-sobrenome");
  const inpCpf = form.querySelector("#input-cpf");
  const inpUsuario = form.querySelector("#input-usuario");
  const inpsenha = form.querySelector("#input-senha");
  const inpConfirmaSenha = form.querySelector("#input-confirma-senha");
  const inpFull = form.querySelectorAll(".full");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const formulario = new Formulario(
      inpNome.value,
      inpSobrenome.value,
      inpCpf.value,
      inpUsuario.value,
      inpsenha.value,
      inpConfirmaSenha.value
    );

    /* 
        let todosCamposPreenchidos = true

        inpFull.forEach((input) => {
            if (input.value === ''){
                todosCamposPreenchidos = false
            }
        })
        
        if (!todosCamposPreenchidos){
            alert('Todos os campos devem estar preenchidos!')
            inpFull.forEach((input) => {
                // input.value = ""
            })
        }
        
        */

    // console.log(inpNome.value)
    // inpNome.disabled = true

    formulario.iniciar();
  });
}
submitInit();
