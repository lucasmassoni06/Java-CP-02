document.getElementById('verificar').addEventListener('click', function () {
    const t1 = parseInt(document.getElementById('termo1').value);
    const t2 = parseInt(document.getElementById('termo2').value);
    const t3 = parseInt(document.getElementById('termo3').value);
  
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
  
    if (isNaN(t1) || isNaN(t2) || isNaN(t3) || t1 <= 0 || t2 <= 0 || t3 <= 0) {
      resultado.textContent = 'Por favor, insira três números inteiros positivos válidos.';
      return;
    }
  
    let padrao = '';
    let sequencia = [t1, t2, t3];
  
    const diff1 = t2 - t1;
    const diff2 = t3 - t2;
    const razao1 = t2 / t1;
    const razao2 = t3 / t2;
  
    if (diff1 === diff2) {
      padrao = 'Progressão Aritmética';
      for (let i = 0; i < 5; i++) {
        sequencia.push(sequencia[sequencia.length - 1] + diff1);
      }
    } else if (Number.isInteger(razao1) && razao1 === razao2) {
      padrao = 'Progressão Geométrica';
      for (let i = 0; i < 5; i++) {
        sequencia.push(sequencia[sequencia.length - 1] * razao1);
      }
    } else {
      padrao = 'Padrão Personalizado (tipo Fibonacci)';
      for (let i = 0; i < 5; i++) {
        const len = sequencia.length;
        sequencia.push(sequencia[len - 1] + sequencia[len - 2]);
      }
    }
  
    resultado.innerHTML = `
      <p><strong>Padrão identificado:</strong> ${padrao}</p>
      <p><strong>Sequência completa:</strong> ${sequencia.join(', ')}</p>
    `;
  });
  