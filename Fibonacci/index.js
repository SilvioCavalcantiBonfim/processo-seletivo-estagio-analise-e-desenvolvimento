//valor a ser verificado
var value = 10;
// Variavel que vai armazenar a sequencia até o primeiro valor maior que variavel 'value'
var fibonacci = [];
// função que popula a lista da sequencia
var create_sequence = function (until) {
    var sq = [0, 1];
    while (sq.at(-1) < until) {
        sq.push(sq.at(-1) + sq.at(-2));
    }
    return sq;
};
//cria a sequencia
fibonacci = create_sequence(Number(value));
//imprime o resultado
console.log("O número informado ".concat((!fibonacci.includes(Number(value))) ? 'não ' : '', "pertence a sequência."));
