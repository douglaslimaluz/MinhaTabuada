
function calcularTabuada() {
    let tabuada = document.querySelector("#name").value;
    let resultado = "";
    resultado += tabuada + " vezes 1 é = " + tabuada * 1 + "<br>";
    resultado += tabuada + " vezes 2 é = " + tabuada * 2 + "<br>";
    resultado += tabuada + " vezes 3 é = " + tabuada * 3 + "<br>";
    resultado += tabuada + " vezes 4 é = " + tabuada * 4 + "<br>";
    resultado += tabuada + " vezes 5 é = " + tabuada * 5 + "<br>";
    resultado += tabuada + " vezes 6 é = " + tabuada * 6 + "<br>";
    resultado += tabuada + " vezes 7 é = " + tabuada * 7 + "<br>";
    resultado += tabuada + " vezes 8 é = " + tabuada * 8 + "<br>";
    resultado += tabuada + " vezes 9 é = " + tabuada * 9 + "<br>";
    resultado += tabuada + " vezes 10 é = " + tabuada * 10 + "<br>";
    
    document.querySelector("#resultado").innerHTML = resultado;
    
    //limpa o campo input após clicar no buscar
    document.querySelector("#name").value = "";
  }
  

