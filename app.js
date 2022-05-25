let contador =document.querySelector("span");

let valueContador = contador.innerHTML;

setInterval(function Contar(){
  valueContador--;
  contador.innerHTML = valueContador;
  if(valueContador <1 ){
    valueContador = 1;
 }
},1000);

let iniciar = function(){
    valueContador =11; 
     
};

