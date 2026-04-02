function logar() {
    document.getElementById('erro').innerHTML= "Dados enviados com sucesso"

    var usuário = document.getElementById('inputUsuario').value
    var senha = document.getElementById('inputSobrenome').value
    var Data = document.getElementById('inputData').value
    var RG = document.getElementById('inputRG').value
    var Rua = document.getElementById('inputRua').value
    var Bairro = document.getElementById('inputBairro').value
    var number = document.getElementById('inputNumber').value
    var city = document.getElementById('inputCity').value
    var CEP = document.getElementById('inputCEP').value
     var Estado = document.getElementById('inputEstado').value
    
    if(usuário == "Maria" && sobrenome == "Eduarda" && Data == "19/08/2009" &&  RG == "33667788" && Rua == "Ernesto Ferreli" && Bairro == "Conjunto Cocuera" && number == "155" && city == "Mogi das Cruzes" && CEP == "14015-040" && Estado == "São Paulo") {
        window.location.href = "page.html"
    } else{
        document.getElementById('erro').innerHTML = "Usuário/senha incorretos! tente novamente!"
    }
}