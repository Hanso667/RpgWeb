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

function rodar(){
var num = Math.floor(Math.random()*1000)
if(num>=0 && num<=500){
    return(Comum.at(Math.floor(Math.random()*Comum.length)))
}
else if(num>500 && num<=750){
    return(incomum.at(Math.floor(Math.random()*incomum.length)))
}
else if(num>750 && num<=900){
    return(raro.at(Math.floor(Math.random()*raro.length)))
}
else if(num>900 && num<=975){
    return(lendario.at(Math.floor(Math.random()*lendario.length)))
}
else if(num>975 && num<=1000){
    return(unico.at(Math.floor(Math.random()*unico.length)))
}
}

function rolar(){

    const timeout = setTimeout(resultado, 5000);

}
function resultado(){
    document.getElementById("trait01").textContent = rodar();
    document.getElementById("trait02").textContent = rodar();
    document.getElementById("trait03").textContent = rodar();
}


