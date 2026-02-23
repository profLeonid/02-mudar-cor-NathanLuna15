"use strct"

const botaoTrocarCor = document.getElementById("botao-trocar-cor")

function trocarCor(){
    const corUsuario = document.getElementById("cor-usuario").value
    
    if(corUsuario == "verde"){
        document.documentElement.style.setProperty("--color-bg", "green")
    }else if(corUsuario == "vermelho"){
        document.documentElement.style.setProperty("--color-bg", "red")
    }else if(corUsuario == "amarelo"){
        document.documentElement.style.setProperty("--color-bg", "yellow")
    }else if(corUsuario == "roxo"){
        document.documentElement.style.setProperty("--color-bg", "purple")

    }else{
        document.documentElement.style.setProperty("--color-bg", corUsuario)
    }
}
botaoTrocarCor.addEventListener("click", trocarCor)




const black =document.getElementById("modo-black")
const white =document.getElementById("modo-white")

function modoescuro(){
    document.documentElement.style.setProperty("--color-bg", "black") 
}
function modoclaro(){
    document.documentElement.style.setProperty("--color-bg", "white")
}

black.addEventListener("click", modoescuro) 
white.addEventListener("click", modoclaro)


