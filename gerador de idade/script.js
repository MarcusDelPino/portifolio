let inputNumber = document.querySelector('#txtidade')
let sexSelector = document.querySelectorAll('input[name="radsex"]')
let btn = document.querySelector('#ver')
let res = document.querySelector('#res')

const data = new Date().getFullYear()

inputNumber.addEventListener('keypress', clicarEnter = (e) => {
    if (e.keyCode === 13){
    if (!inputNumber.value) return;
    btnData()
    }
})

btn.addEventListener('click', btnData = () => {
    let imgCircle = document.createElement('img')
    
    if (!inputNumber.value) return;
    let idade = data - inputNumber.value
    if (sexSelector[0].checked) {
        if (idade >= 0 && idade <= 3) {
            res.innerHTML = `Identificamos Sexo: Masculino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/bebeh.png')
            res.appendChild(imgCircle) 
        } else if (idade <= 18) {
            res.innerHTML = `Identificamos Sexo: Masculino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/jovemhomem.png')
            res.appendChild(imgCircle) 
        } else if (idade <= 60) {
            res.innerHTML = `Identificamos Sexo: Masculino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/adulto.png')
            res.appendChild(imgCircle) 
        } else {
            res.innerHTML = `Identificamos Sexo: Masculino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/idoso.png')
            res.appendChild(imgCircle) 
        }
    }
    if (sexSelector[1].checked) {
        if (idade >= 0 && idade <= 3) {
            res.innerHTML = `Identificamos Sexo: Feminino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/bebem.png')
            res.appendChild(imgCircle) 
        } else if (idade <= 18) {
            res.innerHTML = `Identificamos Sexo: Feminino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/jovemmulher.png')
            res.appendChild(imgCircle) 
        } else if (idade <= 60) {
            res.innerHTML = `Identificamos Sexo: Feminino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/adulta.png')
            res.appendChild(imgCircle) 
        } else {
            res.innerHTML = `Identificamos Sexo: Feminino com ${idade} ano de idade  `
            imgCircle.setAttribute('src', 'img/idosa.png')
            res.appendChild(imgCircle) 
        }
    }

 
})


