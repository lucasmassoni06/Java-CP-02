const botao = document.getElementById('botao')
const cor = document.getElementById('cor')
const resultadoLista = document.getElementById('resultadoLista');
const corEscolhida = {
  red: '#ff0000',
  blue: '#0000ff',
  green: '#008000',
  yellow: '#ffff00',
  orange: '#ffa500',
  purple: '#800080',
  pink: '#ffc0cb',
  black: '#000000',
  white: '#ffffff',
  gray: '#808080'
}
function adicionarCor(){
  const valorCor = cor.value;

if(corEscolhida[valorCor]){
    const lista = document.createElement('li');
    lista.textContent = `${cor.value}, ${corEscolhida[valorCor]}`;
    lista.style.backgroundColor = corEscolhida[valorCor];
    resultadoLista.appendChild(lista);
    cor.value = '';
}
}
cor.addEventListener('keydown', function(enter) {
  if (enter.key === 'Enter') {
    adicionarCor();
  }
})
