//desenha uma modlura em frase
const readline = require('readline-sync');
const ch = '█'

function barra(qtde){
    for (let i =0;i<qtde+4;i++)
    {
        process.stdout.write(ch)
    }
    console.log()
}
const frase = readline.question("Digite a frase: ");

barra(frase.length);
barra(frase.length);

console.log(`${ch} ${frase} ${ch}`)

barra(frase.length);
barra(frase.length);