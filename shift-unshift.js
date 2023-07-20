const nomesDeEstudantes = ['jose', 'joao', 'maria', 'joana'];

console.log(nomesDeEstudantes);

//Criando uma variavel para guardar o primeiro item que foi retirado pelo método shift
const primeiro = nomesDeEstudantes.shift();
//Exibindo primeiro item
console.log(primeiro);

//Adicionando item na frente do array
nomesDeEstudantes.unshift('carlos');
console.log(nomesDeEstudantes);