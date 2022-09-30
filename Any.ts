/* Ao declarar uma variável no TypeScript o seu tipo por padrão será any. Mas devemos tomar um certo cuidado com essa tipagem 
porque ela pode ser perigosa ao decorrer do nosso projeto, não é muito recomendada a sua utilização. */

// Exemplo:

let info: any;

info = [123];
info = 'João';
info = true;
info = 10.50;

// Com o tipo any a variável aceitará qualquer valor.

