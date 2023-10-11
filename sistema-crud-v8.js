const form = document.querySelector('form');
const input = document.querySelector('input');
const p = document.querySelector('p');
const ul = document.querySelector('ul');
const verificar = document.querySelector('button.verificar');
const listar = document.querySelector('button.listar');
const adicionar = document.querySelector('button.adicionar');
const exluir = document.querySelector('button.excluir');

function geraMensagem(mensagem, cor) {
    p.textContent = mensagem;
    p.style.backgroundColor = cor;
    p.style.display = 'block';

    setTimeout(function() {
        p.style.display = 'none';
    }, 4000);
}

verificar.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const resultado = Array.from(nomesOBJECT).every(function(object) {
        return object.nome !== input.value
    });

    if (input.value === '') {
        geraMensagem('ALERT: O campo está vazio', 'lightcoral');
    } else if (resultado) {
        geraMensagem('OK: Nome disponivel para adicionar', 'rgb(218, 209, 168)');
    } else {
        geraMensagem('ALERT: Esse nome já existe no banco', 'rgb(218, 209, 168)');
    }

    // Array.from(nomesOBJECT).forEach(function(object) {
    //     if (object.nome === input.value) {
    //         geraMensagem('ALERT: Esse nome já existe no banco', 'rgb(218, 209, 168)');
    //     }
    // });

    // Array.from(nomesOBJECT).every(function(object) {
    //     if (object.nome !== input.value) {
    //         geraMensagem('OK: Nome disponivel para adicionar', 'rgb(218, 209, 168)');
    //     }
    // });

    for(let chave in nomesOBJECT) {
        // else if (nomesOBJECT[chave].nome === input.value) {
            
        // } else {
        //     geraMensagem('OK: Nome disponivel para adicionar', 'rgb(168, 218, 168)');
        // }


        // if (nomesOBJECT[chave].nome === input.value) {
        //     p.style.backgroundColor = 'lightcoral';
        //     p.textContent = 'Status 190: Nome já existe no banco pai, escreve outro';
        //     setTimeout(function() {
        //         p.textContent = '';
        //     }, 4000);
        // } else {
        //     p.textContent = 'Nome disponível para adicionar';
        // }
    }
});

listar.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const todosLi = document.querySelectorAll('li');

    todosLi.forEach((li) => li.remove());

    let tempoAnimaticao = 900;

    Array.from(nomesOBJECT).forEach(function(object) {
        const criaLi = document.createElement('li');
        criaLi.textContent = object.nome;
        criaLi.style.animation = `lis ${tempoAnimaticao}ms forwards`;
        tempoAnimaticao += 100;
        ul.appendChild(criaLi);
    });


    // const allLis = document.querySelectorAll('li')

    // ul.innerHTML = '';
    // Array.from(nomesOBJECT).forEach((objeto) => ul.innerHTML += `<li>${objeto.nome}</li>`);
});

adicionar.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const resultado = Array.from(nomesOBJECT).every(function(object) {
        return object.nome !== input.value;
    });

    if (input.value === '') {
        geraMensagem('ALERT: xxxxxxxxx', 'rgb(218, 209, 168)');
    } else if (resultado) {
        let novoObjeto = {
            nome: input.value
        };
    
        nomesOBJECT.push(novoObjeto);
    
        let subirJSON = JSON.stringify(nomesOBJECT);
        
        localStorage.setItem('meuSQL', subirJSON);

        geraMensagem('SUCCESS: Nome disponivel para adicionar', 'rgb(218, 209, 168)');
    } else {
        geraMensagem('ERROR: Nome não adicionado pois já existe no banco de dados', 'rgb(218, 209, 168)');
    }
});

exluir.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const resultado = Array.from(nomesOBJECT).every(function(object) {
        return object.nome !== input.value;
    });

    if (input.value === '') {
        geraMensagem('ALERT: O campo está vazio', 'rgb(218, 209, 168)');
    } else if (resultado) {
        geraMensagem('ERROR: Não é possivel excluir um nome que não existente', 'rgb(218, 209, 168)');
    } else {
        for (let chave in nomesOBJECT) {
            if (nomesOBJECT[chave].nome === input.value) {
                nomesOBJECT.splice(chave, 1);
                geraMensagem('SUCCESS: Nome removido', 'rgb(218, 209, 168)');
            } else {
                
            }
        }
    }
    
    
    // else {
    //     for (let chave in nomesOBJECT) {
    //         if (nomesOBJECT[chave].nome === input.value) {
    //             nomesOBJECT.splice(chave, 1);
    //             geraMensagem('SUCCESS: Nome removido', 'rgb(218, 209, 168)');
    //         } else {
                
    //         }
    //     }
    // }

    let subirJSON = JSON.stringify(nomesOBJECT);
        
    localStorage.setItem('meuSQL', subirJSON);

    // let filtradoJSON = nomesOBJECT.filter(function(item) {
    //     return item.value !== '';
    // });

    // let subirJSON = JSON.stringify(nomesOBJECT);

    // localStorage.setItem('meuSQL', subirJSON);

    // p.style.backgroundColor = 'lightyellow';
    // p.textContent = 'Status 24: Tu é doido menor, tu executou o menor pai';
    // setTimeout(function() {
    //     p.textContent = '';
    // }, 4000);
})




/* Outra parte */

const nomes = [
    {nome: 'Roberto'},
    {nome: 'Marcela'},
    {nome: 'João'},
    {nome: 'Jhonnata'},
    {nome: 'Carlos'},
    {nome: 'Helenna'},
    {nome: 'Giovanna'},
];

const nomesJSON = JSON.stringify(nomes);

localStorage.setItem('meuSQL', nomesJSON);

console.log(localStorage.getItem('meuSQL'));