const localStorageKey = 'chave'
function novaTarefa(){
    let input = document.getElementById('input-nova-tarefa')

    //validacao
    if(!input.value){
        alert('Digite algo para adicionar na sua lista')
    }
    else{
        //incrementar ao localstorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey, JSON.stringify(values))
        mostrarValores()
    }

}


function mostrarValores(){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let lista = document.getElementById('lista-afazeres')
    lista.innerHTML = ''
    for(let i = 0; i < values.length; i++){
        lista.innerHTML += `<li>${values[i]['name']}<button id='ok' onclick='removeItem("${values[i]['name']}")'>ok</button></li>`
    }
}

function removeItem(dado){
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == dado)
    values.splice(index,1)
    localStorage.setItem(localStorageKey, JSON.stringify(values))
    mostrarValores()
}


mostrarValores()