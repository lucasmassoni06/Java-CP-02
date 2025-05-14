let tempo = localStorage.getItem('tempo') ? parseInt(localStorage.getItem('tempo')) : 0;
const timer = document.getElementById('timer')

function atualizarTempo(){
    if(tempo !== 10){
        tempo += 1
        timer.textContent = tempo
        localStorage.setItem(`tempo`, tempo);
        setTimeout(atualizarTempo, 1000)
    }else{
        alert("Seu tempo foi ultrapassado!")
    }}

atualizarTempo();