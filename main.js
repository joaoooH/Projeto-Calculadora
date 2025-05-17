//função: define uma lista de ações que serão executadas quando a função for chamada. Palavra reservada oara criar uma função em java function
function insert(num) {//inicio da função
    //variavel é um espaço na memoria que armazena uma informação oara uso posterio. Ao nomeá-la evite : n°s e letras maiusculas no incio, espaço entre palavras (use _ ou camelCase) e acentuação.
    //Captura o conteudo atual exibido no elemento com id 'resultado' e armazena na variavel numero
    var numero = document.getElementById('resultado').innerHTML;
    //atualiza o conteudo do elemento 'resultado' concatenando o valor atual com o n° ou o operador (+,-,/,*) passanndo no parametro num
    document.getElementById('resultado').innerHTML = numero + num
}//fim da função
//Função para todo o conteúdo que aparce no visor (tag p [id=resultado])
function clean() {
    //Define que o conteudo do elemento 'resultado' como um elemento de texto vazio, limpando a tela
    document.getElementById('resultado').innerHTML = "";
}
//Função para apagar o útilmo caracter digitado
function del() {
    //Varivel para armazenar a informação atual do visor (tag p)
    var resultado = document.getElementById('resultado').innerHTML;
    //Usa o método substring para remover o último carcter digitado na tela, atualizando o valor. O métdo length retornará o tamanho da string , ou seja quantos elementos aparecem na tela.
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length - 1)
}
//Função 'calcular irá avaliar a expressão da tela e realizar o calculo exibindo-o na tela 
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    //Se o conteúdo da tela (tag p) não estiver vazio
    if (resultado) {
        //Use a função eval() para avaliar a expressão matemática e retornar o resultado da operação
        document.getElementById('resultado').innerHTML = eval(resultado);
    }//senão, caso não haja nenhum conteúdo no visro 
    else {
        //Exiba uma mensagem de Erro
        document.getElementById('resultado').
            innerHTML = 'Erro';
    }
}
document.addEventListener('keydown',
    function (event) {
        //'salva' a tecla pressionada
        var tecla = event.key
        //A condição do if testa se a tecla pressionada pertence ao intervalo de 0 a 9 ou contém os caracteres + - /*
        if (/[0-9+\-*/]/.test(tecla)) {
            insert(tecla);//Chama a função insert.
        }
        //Vereifica se a tecla pressionada é o enter. 
        else if (tecla == 'Enter'){
            calcular();//Chama a função calcular. 
        }
        //verifica se a tecla pressionada é o Backspace.
        else if(tecla == 'Backspace'){
            del();//chama função del - Apaga o ultimo carcter.
        }
        //verifica se a tecla pressionada é o Delete.
        else if(tecla == 'Delete'){
            clean();//cham a função clean - Apagando todo o conteudo do visor.
        }

    }//Fim da função
)//Fecha o bloco do evento 