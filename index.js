///""""var peso = document.getElementById("pesoID").innerText;
///var altura = document.getElementById("alturaId").innerText;



const btn = document.querySelector("#calcImc")
//const btn_limpar = document.querySelector("#ClearData")


btn.onclick = ()=>{

    //seção de variáveis peso e altura
    var inputAltura = document.querySelector("#alturaId");
    var textoAltura = inputAltura.value;  
    var inputPeso = document.querySelector("#pesoID");
    var Peso = inputPeso.value;

    //variavel onde se mostra resultado do imc
    var Mostra_resultado = document.querySelector("#txt_resultado");

    //variavel da imagem
    var imagem_exemplo = document.querySelector("#foto_resultado")

    // variavel do alerta que mua a cor
    var alerta = document.querySelector('#bolinha_resultado_cor')

    
    //seção onde se calcula o imc
    var alturaQuadrado = textoAltura ** 2;
    var imc = Peso/alturaQuadrado;


    //abaixo do peso
    if(imc <= 18.5){
        alerta.style.background = "#F09F40";
        Mostra_resultado.innerText = `Seu IMC está em ${imc.toFixed(2)}.\n Dessa forma você é considerado abaixo do peso`
        imagem_exemplo.src='/imagens/magro.png'
    }
    //peso ideal
    if(imc >= 18.6 && imc <= 24.9){
        alerta.style.background = "#40F09C";    
        Mostra_resultado.innerText = `Seu IMC está em ${imc.toFixed(2)}.\n Dessa forma você está no peso ideal`
        imagem_exemplo.src='/imagens/corpoexemplo.png'
    }
    //sobrepeso
    if(imc >= 25 && imc <= 29.9){
        alerta.style.background = "#D2E032";
        Mostra_resultado.innerText = `Seu IMC está em ${imc.toFixed(2)}.\n Dessa forma você está com sobrepeso`
        imagem_exemplo.src='/imagens/sobrepeso.png'
    }
    //Obesidade
    if(imc > 30){
        alerta.style.background = "#F21111";
        Mostra_resultado.innerText = `Seu IMC está em ${imc.toFixed(2)}.\n Dessa forma você está obeso`
        imagem_exemplo.src='/imagens/acima_peso.png'
    }
}
    //Mostra_resultado.innerText = "aqui está o resltado"
    
    //alert(imc)
function Clear_Data(){
    var imagem_exemplo = document.querySelector("#foto_resultado")
    var Mostra_resultado = document.querySelector("#txt_resultado");
    var alerta = document.querySelector('#bolinha_resultado_cor')


    imagem_exemplo.src='/imagens/imagem_padrao.png'
    Mostra_resultado.innerText = "resultado"
    alerta.style.background = "#40F09C";

    

    document.querySelector('#meusDados').reset();
    document.querySelector('#alturaId').reset();

    //var inputAltura = document.querySelector("#alturaId").reset();
    //var inputPeso = document.querySelector("#pesoID");

}
