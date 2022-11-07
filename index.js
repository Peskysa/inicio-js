const input_1 = document.getElementById("input_1")
const input_2 = document.getElementById("input_2")
const input_3 = document.getElementById("input_3")
const calcular = document.getElementById("calcular")
const resultado = document.getElementById("resultado")

calcular.addEventListener('click', calculardor)


function calculardor(){
    const i = input_2.value
    var sumita = input_1.value + input_3.value

    if (i == '+' || i == '-'){
        resultado.innerText= sumita
    }else{
        resultado.innerText="mal"
    }
}



    

