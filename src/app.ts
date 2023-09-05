import DB from './db';
import promptSync from 'prompt-sync';

const prompt = promptSync();

async function main(): Promise<void> {
  await DB.initialize();

  menu();
}

main();

async function menu () {

  let input: string = '';

  do {
    console.clear();
    console.log('1 - Listar pessoas - do Pretto');
    console.log('2 - Cadastrar novo cliente - do Pretto');
    console.log('3 - Editar cliente - do Pretto 22:27');
    console.log('4 - Excluir cliente');
    console.log('5 - Listar quartos');
    console.log('6 - Cadastrar novo quarto');
    console.log('7 - Editar quarto s');
    console.log('8 - Excluir quarto');
    console.log('9 - Olhar pela janela');
    console.log('0 - Sair');
    input = prompt('Selecione a opção desejada:');

    if (input == '1') {

    } else if (input == '2') {

    } else if (input == '3') {

    } else if (input == '4') {

    }

    switch (input) {
      case '1':
    }

    prompt('Pressione enter para continuar');
  } while (input != '0');
}
