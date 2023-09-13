function media(){
    var n1 = document.getElementById('valor 1').value;
    var n2 = document.getElementById('valor 2').value;
    var media = (parseInt(n1) + parseInt(n2)) / 2;

    if(media>=6)
    if(media==10)
        alert('Parabéns, o aluno atingiu a média ' + media + ' e foi aprovado!')
        else
        alert('Parabéns, aprovado! Média '+ media)
        else
        alert('sua media foi '+ media +'! Você é burro, some daqui')
}   

function comparar(){
    var n1 = document.getElementById('valor 1').value;
    var n2 = document.getElementById('valor 2').value;
    
    if(n1==n2)
    if(n1>n2)
        alert(n1 + ' é igual a ' + n2)
    else
        alert(n1 + ' é maior que ' + n2) 
    else
        alert(n2 + ' é maior que ' + n1)
        
   
    
}


