function TodoNovo(){
    const container = document.querySelector('.container')
    const contentUl = document.querySelector('.content')
    const txtValue = document.querySelector('#to-do-text')
    const btnAdd = document.querySelector('#to-do-add')

    btnAdd.addEventListener('click', () =>{
        // console.log(txtValue.value)
        if(!txtValue.value) return
        this.todoCreator(txtValue.value)
    })

    txtValue.addEventListener('keypress', (e) => {
        console.log(5+3) 
        if(e.keyCode === 13){
            if(!txtValue.value) return
            this.todoCreator(txtValue.value)
        }
    })

    this.todoCreator = (txt) => {
        const li = this.liCreate()
        li.innerHTML = txt
        contentUl.appendChild(li)
        this.clearBtn(li)
        this.clearScreen()
        this.saveTask()
    }

    container.addEventListener('click', e => {
        const el = e.target
        // console.log(el)
        if(el.classList.contains('apagar')){
            el.parentElement.remove()
        }
        this.saveTask()
    })

    this.clearScreen = () => {
        txtValue.value = ''
        txtValue.focus()
    }

    this.saveTask = () => {
        const tasks = container.querySelectorAll('li')
        const taskList = []

        for (const task of tasks) {
            let taskTxt = task.innerText
            taskTxt = taskTxt.replace('Apagar',' ')
            
            taskList.splice(Number.MAX_VALUE,0, taskTxt)
        }
        console.log(taskList)

        const jsonTask = JSON.stringify(taskList)
        localStorage.setItem('task', jsonTask)
    }

    this.getTask = () => {
        const gettasks = localStorage.getItem('task')
        const taskList = JSON.parse(gettasks)

        for (const task of taskList) {
            this.todoCreator(task)
        }
        
    }


}

TodoNovo.prototype.clearBtn = function(liToo){
    const btn = document.createElement('button')
    btn.innerHTML = 'Apagar'
    btn.setAttribute('class', 'apagar')
    btn.setAttribute('title', 'Apagar esta tarefa?')
    liToo.appendChild(btn)
    
}

TodoNovo.prototype.liCreate = function(){
    const li = document.createElement('li')
    return li
}



const todo = new TodoNovo()
todo.getTask()