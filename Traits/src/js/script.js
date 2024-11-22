var Comum = [
    "Forte",
    "Ferreiro nato",
    "Alquimista nato",
    "Armadureiro nato",
    "Espadachim nato",
    "Machadeiro nato",
    "Arqueiro nato",
    "Mago nato",
]
var incomum = [
    "Resistencia a veneno",
    "Resistencia a dano fisico",
    "Prodigio Magico",
    "Prodigio Fisico",
    "negociante",
    "sortudo",
    "Lider Nato",
    "furtivo",
]
var raro = [
    "Resistencia ao calor",
    "Resistencia ao frio",
    "Resistencia a eletricidade",
    "Resistencia ao vento",
    "Resistancia a maldições",
    "Resistencia a magia",
    "Escolhido do Fogo",
    "Escolhido do Gelo",
    "Escolhido do Raio",
    "Escolhido do Vento",
    "Escolhido da Terra",
    "Inventor",
    "naturalista",
    "Benção Fisica",
    "Benção Magica",
    "inabalavel",
]
var lendario = [
    "Resistencia a escuridão",
    "Resistencia a luz",
    "Escolhido da Luz",
    "Escolhido da Escuridão",
    "Benção do olfato",
    "Benção da audição",
    "Benção da visão",
    "Leitor de almas",
]
var unico = [
    "Echo",
    "Anti-Probabilidade",
]

var one
var two
var three

function sortear() {
    var num = Math.floor(Math.random() * 1000)
    if (num >= 0 && num <= 500) {
        return (Comum.at(Math.floor(Math.random() * Comum.length)))
    }
    else if (num > 500 && num <= 750) {
        return (incomum.at(Math.floor(Math.random() * incomum.length)))
    }
    else if (num > 750 && num <= 900) {
        return (raro.at(Math.floor(Math.random() * raro.length)))
    }
    else if (num > 900 && num <= 975) {
        return (lendario.at(Math.floor(Math.random() * lendario.length)))
    }
    else if (num > 975 && num <= 1000) {
        return (unico.at(Math.floor(Math.random() * unico.length)))
    }
}
function resultado() {
    document.getElementById("trait01").textContent = one
    document.getElementById("trait02").textContent = two
    document.getElementById("trait03").textContent = three
}
function rolar() {
    one = sortear()
    two = sortear()
    three = sortear()
    const timeout1 = setTimeout(first, 1000);
    const timeout2 = setTimeout(second, 2000);
    const timeout3 = setTimeout(third, 3000);
    document.getElementById("trait01").className = ""
    document.getElementById("trait01").textContent = ""
    document.getElementById("trait02").className = ""
    document.getElementById("trait02").textContent = ""
    document.getElementById("trait03").className = ""
    document.getElementById("trait03").textContent = ""
    const timeout = setTimeout(resultado, 4000);
    console.log("one"+one)
    console.log("two"+two)
    console.log("three"+three)
}

function first() {
    if (Comum.includes(one)) {
        document.getElementById("trait01").textContent = "comum"
        document.getElementById("trait01").className = "comum"
    } 
    else if (incomum.includes(one)) {
        document.getElementById("trait01").textContent = "incomum"
        document.getElementById("trait01").className = "incomum"
    }
    else if (raro.includes(one)) {
        document.getElementById("trait01").textContent = "raro"
        document.getElementById("trait01").className = "raro"
    }
    else if (lendario.includes(one)) {
        document.getElementById("trait01").textContent = "lendario"
        document.getElementById("trait01").className = "lendario"
    }
    else if (unico.includes(one)) {
        document.getElementById("trait01").textContent = "unico"
        document.getElementById("trait01").className = "unico"
    }
    
}
function second() {
    if (Comum.includes(two)) {
        document.getElementById("trait02").textContent = "comum"
        document.getElementById("trait02").className = "comum"
    } 
    else if (incomum.includes(two)) {
        document.getElementById("trait02").textContent = "incomum"
        document.getElementById("trait02").className = "incomum"
    }
    else if (raro.includes(two)) {
        document.getElementById("trait02").textContent = "raro"
        document.getElementById("trait02").className = "raro"
    }
    else if (lendario.includes(two)) {
        document.getElementById("trait02").textContent = "lendario"
        document.getElementById("trait02").className = "lendario"
    }
    else if (unico.includes(two)) {
        document.getElementById("trait02").textContent = "unico"
        document.getElementById("trait02").className = "unico"
    }
}
function third() {
    if (Comum.includes(three)) {
        document.getElementById("trait03").textContent = "comum"
        document.getElementById("trait03").className = "comum"
    } 
    else if (incomum.includes(three)) {
        document.getElementById("trait03").textContent = "incomum"
        document.getElementById("trait03").className = "incomum"
    }
    else if (raro.includes(three)) {
        document.getElementById("trait03").textContent = "raro"
        document.getElementById("trait03").className = "raro"
    }
    else if (lendario.includes(three)) {
        document.getElementById("trait03").textContent = "lendario"
        document.getElementById("trait03").className = "lendario"
    }
    else if (unico.includes(three)) {
        document.getElementById("trait03").textContent = "unico"
        document.getElementById("trait03").className = "unico"
    }
}
