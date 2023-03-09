//Lista de dados iniciais
var input = [
    {estado: 'SP', valor: 67836.43},
    {estado: 'RJ', valor: 36678.66},
    {estado: 'MG', valor: 29229.88},
    {estado: 'es', valor: 27165.48},
    {estado: 'outros', valor: 19849.53}
] 

//siglas dos estados
const estados = ['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE','TO'];


//calcula o faturamento total
var total = 0;
input.forEach(e => total=e.valor+total);

//salva os valores dos faturamentos que não tem sigla valida
var other = 0;

input.forEach(e => {
    if(estados.includes(e.estado.toUpperCase()))
        console.log(`${e.estado.toUpperCase()}: ${(e.valor/total*100).toFixed(2)}%`);
    else
        other = other + e.valor;
});

console.log(`Outros: ${(other/total*100).toFixed(2)}%`);