var numeroSecreto = parseInt(Math.random() * 1001);

while(chute != numeroSecreto) {
  var chute = prompt('Digite um número entre 0 e 1000') //se o chute for igual ao número secreto
  if (chute == numeroSecreto) {
    alert('Você acertou parabêns!')
  } else if (chute > numeroSecreto) {
    alert('Voce errou... o número secreto é menor')
  } else if (chute < numeroSecreto) {
    alert('Errou... o número secreto é maior')
  }
}

                            
                            
                            
                            
                            