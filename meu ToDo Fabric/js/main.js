//chamei todos os class e ids
const container = document.querySelector('.container')
const contentUl = document.querySelector('.content')
const inputTxt = document.querySelector('#to-do-text')
const btnAdd = document.querySelector('#to-do-add')


btnAdd.addEventListener('click', btnAddTarefa = () => {//evento click
    if (!inputTxt.value) return;//se não tiver texto no INPUT não inicia
    criarTarefa(inputTxt.value)//chama a função cria tarefa
    
    
    // console.log(inputTxt.value)
})

inputTxt.addEventListener('keypress', apertaEnter = (e) => {//evento de apertar o enter
    if (e.keyCode === 13) {//valor que reconhece o enter
        if (!inputTxt.value) return;//se não tiiver texto no input não inicia
        criarTarefa(inputTxt.value)//chama a função de criarTarefa
       

    }
})

criarLi = () => {//vai criar um li para tabelas, e vai retornar o proprio li
    const li = document.createElement('li')
    return li

}

function limpaInputTxt() {//function para limpar o input depois de usado
    inputTxt.value = ' '//vai estar vazio
    inputTxt.focus()//gera foco no input

}

function criarTarefa(txt) {//criar tarefa é uma function que vai receber como parametro o input.value
    const li = criarLi() //chamei a funcçãoo para utilizar no createElement
    li.innerHTML = txt//determinei o que vai aparecer em li com o valor recebido
    contentUl.appendChild(li)//gerei o appendchild com li dentro da UL 
    criaBtnApagar(li)//chamei a função que cria o button apagar
    salvarTarefas()//salvei a tarefa no navegador
    limpaInputTxt()//limpei o input
}

function criaBtnApagar(li) {//criei a function para criar um botão de apagar recebi o li como parametro
    const btnApagar = document.createElement('button') //criando o elemento do botão
    btnApagar.innerHTML = 'Apagar' //o que vai estar escrito dentro dele
    btnApagar.setAttribute('class', 'apagar')//setei uma class
    btnApagar.setAttribute('title', 'Apagar a tarefa')//setei um title
    li.appendChild(btnApagar)//criei pelo appendchild

}

container.addEventListener('click', function (e) {//criei um evento click para apagar o botão e o todo
    // console.log(e.target)    
    const el = e.target//determinei o e.target
    if (el.classList.contains('apagar')) {//uma condicional que se tiver a class 'apagar' ele vai voltar
        el.parentElement.remove()//essa situação que apaga o target
        salvarTarefas()//salvei essa alteração
    }
})

function salvarTarefas() { //criei uma function para salvar
    const tarefas = contentUl.querySelectorAll('li')//peguei todos os valores de li que foram criados
    const listaDeTarefas = []//determinei uma array

    for (let tarefa of tarefas) { // fiz um for of de tarefas
        let tarefaTexto = tarefa.innerText //criei um let para determinar como um texto
        tarefaTexto = tarefaTexto.replace('Apagar', '')//tirei o apagar porque ele traz junto depois da criação do botão
        listaDeTarefas.push(tarefaTexto)// add na array
        // console.log(listaDeTarefas)
    }

    const tarefaJson = JSON.stringify(listaDeTarefas) //crio o meu obj em JSON
    localStorage.setItem('tarefa', tarefaJson)//set o item no localStorage do navegador, localStorage.setItem('nome, variavel stringify)

}

function addTarefasSalvas(){// crio um function para fazer a tarefa ser feita com o dados do navegador
    const tarefas = localStorage.getItem('tarefa')//pego do localStorage.getItem(´nome´)
    const listaTarefas = JSON.parse(tarefas)//crio um novo obj transformando novamente o JSON
    for (let tarefa of listaTarefas){//faço um for of e add em cria tarefa todos da lista
        criarTarefa(tarefa)
    }
}

addTarefasSalvas()