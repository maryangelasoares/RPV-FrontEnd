let total_divida = 1400;
function atualizar_divida(valor_recebido){
 total_divida -= valor_recebido;
 return total_divida;
}
for(var i=0;i<24;i++){
 atualizar_divida(70);
}
