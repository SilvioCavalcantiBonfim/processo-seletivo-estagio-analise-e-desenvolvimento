//string a ser invertida
var texto = 'Se tu choras por ter perdido o sol, as lágrimas te impedirão de ver as estrelas';

//função de reversão
const reverse = (txt) => {
    var aux_txt = '';
    for (let i = 0; i < txt.length; i++) {
        aux_txt = aux_txt + txt[txt.length - 1 - i];
    }
    return aux_txt;
}

//imprime o texto e sua reversão
console.log(`${texto} => ${reverse(texto)}`)