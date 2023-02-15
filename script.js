let soma = document.getElementById('soma');
let subtracaoAb = document.getElementById('subtracaoAb');
let subtracaoBa = document.getElementById('subtracaoBa');
let multiplicacao = document.getElementById('multiplicacao');
let divisaoAb = document.getElementById('divisaoAb');
let divisaoBa = document.getElementById('divisaoBa');
let potenciaAb = document.getElementById('potenciaAb');
let potenciaBa = document.getElementById('potenciaBa');
let raizQuadradaA = document.getElementById('raizQuadradaA');
let raizQuadradaB = document.getElementById('raizQuadradaB');
let fatorialA = document.getElementById('fatorialA');
let fatorialB = document.getElementById('fatorialB');
let porcentagemAB = document.getElementById('porcentagemAB');
let porcentagemBA = document.getElementById('porcentagemBA');
let media = document.getElementById('media');

soma.innerHTML = 0;
subtracaoAb.innerHTML = 0;
subtracaoBa.innerHTML = 0;
multiplicacao.innerHTML = 0;
divisaoAb.innerHTML = 0;
divisaoBa.innerHTML = 0;
potenciaAb.innerHTML = 0;
potenciaBa.innerHTML = 0;
raizQuadradaA.innerHTML = 0;
raizQuadradaB.innerHTML = 0;
fatorialA.innerHTML = 0;
fatorialB.innerHTML = 0;
porcentagemAB.innerHTML = 0;
porcentagemBA.innerHTML = 0;
media.innerHTML = 0;

function calcularSoma(a,b){
  return a+b;
};
function calcularsubtracaoAb(a,b){
  return a-b;
};
function calcularsubtracaoBa(a,b){
  return b-a;
};
function calcularMultiplicacao(a,b){
  return a*b;
};
function calculardivisaoAb(a,b){
  return a/b;
};
function calculardivisaoAb(a,b){
  return (a/b).toFixed(2);
};
function calculardivisaoBa(a,b){
  return (b/a).toFixed(2);
};
function calcularpotenciaAb(a,b){
  return a **b;
};
function calcularpotenciaBa(a,b){
  return b **a;
};
function calcularRaizQuadrada(a){
  return Math.sqrt(a).toFixed(2); 
};

function calcularFatorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  return num;
};

function calcularPorcentagem(a, b) {
  return String(Math.round((a / b) * 100)) + ' %';  
};

function calcularMedia(a,b) {
  return (a+b) / 2;
};


const calcular = () => {
  let inputA = document.getElementById('primeiroNumero').value;
  let inputB = document.getElementById('segundoNumero').value;
  
  let a = parseFloat(inputA);
  let b = parseFloat(inputB);

  soma.innerHTML = calcularSoma(a,b);
  subtracaoAb.innerHTML = calcularsubtracaoAb(a,b);
  subtracaoBa.innerHTML = calcularsubtracaoBa(a,b);
  multiplicacao.innerHTML = calcularMultiplicacao(a,b);
  divisaoAb.innerHTML = calculardivisaoAb(a,b);
  divisaoBa.innerHTML = calculardivisaoBa(a,b);
  potenciaAb.innerHTML = calcularpotenciaAb(a,b);
  potenciaBa.innerHTML = calcularpotenciaBa(a,b);
  raizQuadradaA.innerHTML = calcularRaizQuadrada(a);
  raizQuadradaB.innerHTML = calcularRaizQuadrada(b);
  fatorialA.innerHTML = calcularFatorial(a);
  fatorialB.innerHTML = calcularFatorial(b);
  porcentagemAB.innerHTML = calcularPorcentagem(b,a);
  porcentagemBA.innerHTML = calcularPorcentagem(a,b);
  media.innerHTML = calcularMedia(a,b);

}