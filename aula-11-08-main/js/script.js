// let chave ='item1';
// localStorage.setItem(chave,'fiap')

// let lerchave= localStorage.getItem(chave);
// console.log(lerchave);

// let info='info'
// let dados = {nome:"Pedro", idade:18}
// localStorage.setItem(info, JSON.stringify(dados));

// // limpa as chaves 
// localStorage.clear();

// let array =[1,2,3,4,5]
// sessionStorage.setItem('LISTA', JSON.stringify(array))


//criar a lista de objetos
let listaDados = [];

//construtor(fundacao de uma construcao)
function Campos(campo1) {
    this.campo1 = campo1;

}
//disparar botao
const btnEnviar = document.querySelector("#btnsubmit");

//evento de click
btnEnviar.addEventListener('click', () => {
    const inputcampo1 = document.querySelector("#campo1");

    //instanciando para receber o construtor 
    let info = new Campos(inputcampo1.value)
    listaDados.push(info);
    localStorage.setItem('DADOS', JSON.stringify(listaDados))
})