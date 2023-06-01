function meuToDo(){
    return{
        display: document.querySelector('#to-do-text'),
        btnAdd: document.querySelector('#to-do-add'),
        ulContent: document.querySelector('.content'),

        iniciar() {
            this.btnAdd.addEventListener('click', () => {
            // console.log(this.display.value)
            this.criandoToDo(this.display.value)
            })
            this.apagarToDo()
            this.retornaItens()
            // this.salvarToDo()
        },

        createLi(){
            const li = document.createElement('li')
            return li
        },

        criandoToDo(toDoTxt){
            let li = this.createLi()
            li.innerHTML = `${toDoTxt} `
            this.ulContent.appendChild(li)
            this.btnApagar(li)
            this.salvarToDo()
            
        },

        btnApagar(li){
            const btnApaga = document.createElement('button')
            btnApaga.innerHTML = 'APAGAR'
            btnApaga.setAttribute('class', 'apagar')
            btnApaga.setAttribute('title', 'Esse botão apaga')
            li.appendChild(btnApaga)

        },

        apagarToDo(){
            document.addEventListener('click', (e) => {
                // console.log(e.target)
                const el = e.target
                if (el.classList.contains('apagar')) {
                    el.parentElement.remove()
                }
                this.salvarToDo()
            })
        },

        salvarToDo(){
            const liToDo = document.querySelectorAll('li')
            const toDoArray = []

            for (const tarefa of liToDo) {
                let tarefaTxt = tarefa.innerText
                tarefaTxt = tarefaTxt.replace('APAGAR', '')
                toDoArray.push(tarefaTxt)
                // console.log(toDoArray)
            }

            const tarefaJson = JSON.stringify(toDoArray)
            localStorage.setItem('tarefas', tarefaJson)

        },

        retornaItens(){
            const tarefas = localStorage.getItem('tarefas')
            const lista = JSON.parse(tarefas)

            for (const tarefa of lista) {
                this.criandoToDo(tarefa)
                
            }
        }


    }
}
const meutodo = meuToDo()
meutodo.iniciar() 