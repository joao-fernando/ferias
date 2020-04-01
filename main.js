//var cont = document.getElementById("cont")
var vacation = document.getElementById("ferias")
//var contador = 60

contagem();
var myVar = setInterval(contagem, 1000);

function contagem(){
  
  const dataAtual = new Date();
  const dataFerias = new Date("2020-05-18T00:00-04:00");

  const diferença = Math.abs(dataFerias.getTime() - dataAtual.getTime());
  const dias = Math.ceil(diferença / (1000 * 60 * 60 * 24));


  ferias.classList.add("ferias");

  vacation.innerText = "Faltam " + dias + " dias para suas férias";
  //cont.innerHTML = contador
  //contador -= 1
}