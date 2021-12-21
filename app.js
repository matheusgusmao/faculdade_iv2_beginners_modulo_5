const firstColor = document.querySelector(('#firstColor'))
const secondColor = document.querySelector(('#secondColor'))
const deg = document.querySelector(('#deg'))
const fontColor = document.querySelector(('#fontColor'))
const textArea = document.querySelector(('#textArea'))
const fontSize = document.querySelector(('#fontSize'))
const elementActive = document.getElementById('elementActive')


/* Objetivo da função: Salvar Objeto */
function save() {
    const objeto = {
        firstColor: firstColor.value,
        secondColor: secondColor.value,
        deg: deg.value,
        fontColor: fontColor.value,
        textArea: textArea.value,
        fontSize: fontSize.value
    }

    const stringifiedObject = JSON.stringify(objeto)
    localStorage.setItem('estilos', stringifiedObject)

    if (elementActive.classList.contains("active")) {
        console.log('contém')
        elementActive.classList.remove("active");
    } else {
        console.log('não contém')
        elementActive.classList.add("active");
    }

    setTimeout(loadStorage, 1700)

    setTimeout(removeActive, 3500)

}

function removeActive() {
    elementActive.classList.remove("active");
}



loadStorage()

const section = document.querySelector('#mySection')


/* Objetivo da função: Carregar Objeto */
function loadStorage() {

    console.log("loadStorage");


    const parsedLocalStorageObject = JSON.parse(localStorage.getItem('estilos'))

    console.log("loadStorage - parsedLocalStorageObject");
    console.log(parsedLocalStorageObject);

    document.body.style.backgroundImage = `linear-gradient(${parsedLocalStorageObject.deg}deg, ${parsedLocalStorageObject.firstColor}, ${parsedLocalStorageObject.secondColor})`
    

    const text = document.querySelector('#text')


    console.log("loadStorage - text");
    console.log(text);

    text.innerText = `${parsedLocalStorageObject.textArea}`
    text.style.fontSize = `${(parsedLocalStorageObject.fontSize + 'px')}`
    text.style.color = `${parsedLocalStorageObject.fontColor}`
}


/* Objetivo da função: Limpar valores do Objeto */
function clearStorage() {
    localStorage.clear()

    if (localStorage.getItem('estilos') === null) {
        localStorageDefault()
    }
}

function localStorageDefault() {
    console.log('localStorageDefault')
    const object = {
        firstColor: "#ffffff",
        secondColor: "#ffffff",
        deg: 0,
        fontColor: "#000000",
        textArea: "",
        fontSize: ""
    }

    const ObjectNull = JSON.stringify(object)
    localStorage.setItem('estilos', ObjectNull)
    text.innerText = ''
    loadStorage()
}