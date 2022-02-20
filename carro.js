//Codigos do carro;
let xCarros = [600, 600, 600, 600, 600, 600];
let yCarros = [40, 96, 150, 210, 270, 318];
let velocidadeCarros = [2.8, 2.5, 3, 5, 3.1, 2.3];
let comprimentoCarro = 30;
let alturaCarro = 30;
 
function mostraCarro(){
  for(let i = 0; i < imagemCarros.length; i ++){
    image(imagemCarros[i], xCarros[i], yCarros[i], 60, 40);
  }  
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i ++){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaPosicaoInicialDoCarro(x){
  for (let i = 0; i < imagemCarros.length; i ++){
    if(passouTodaATela(xCarros[i])){
      xCarros[i] = 600;
    }
  } 
}

function passouTodaATela(xCarros){
  return xCarros < - 50;
}