//importa os dados de faturamento
const invoicing_json = require('./faturamento_mensal.json');

//remove os dias em que o faturamento foi zero
const invoicing = invoicing_json.filter(e => e.valor !== 0);

//=========================================================
//calcula a média
//=========================================================
//inicia a variavel media
var average = 0;
//soma todos os valores de faturamento
invoicing.forEach(e => average = average + e.valor);
//divide pela quantidde de faturamentos
average = average/invoicing.length;
//=========================================================
//cria uma nova lista apenas com os valores maiores que a média
const aboveAverage = invoicing.filter(e => e.valor > average);

console.log(`O menor valor de faturamento ocorrido em um dia do mês: ${Math.min(...invoicing.map(e => e.valor))}`);
console.log(`O maior valor de faturamento ocorrido em um dia do mês: ${Math.max(...invoicing.map(e => e.valor))}`);
console.log(`Número de dias no mês em que o valor de faturamento diário foi superior à média mensal: ${aboveAverage.length}`);