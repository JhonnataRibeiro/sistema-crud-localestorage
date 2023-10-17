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

const rgbVerde = 'rgb(155, 212, 160)';
const rgbAmarelo = 'rgb(233, 204, 131)';
const rgbVermelho = 'rgb(240, 128, 128)';

verificar.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const resultado = Array.from(nomesOBJECT).every(function(object) {
        return object.nome !== input.value
    });

    if (input.value === '') {
        geraMensagem('ALERT: O campo está vazio', `${rgbAmarelo}`);
    } else if (resultado) {
        geraMensagem('OK: Nome disponivel para adicionar', `${rgbVerde}`);
    } else {
        geraMensagem('ALERT: Esse nome já existe no banco', `${rgbAmarelo}`);
    }

    const todosLi = document.querySelectorAll('li');

    todosLi.forEach((item) => {
        item.style.animation = `saindo ${1500}ms forwards`;
    });
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
});

adicionar.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const resultado = Array.from(nomesOBJECT).every(function(object) {
        return object.nome !== input.value;
    });

    if (input.value === '') {
        geraMensagem('ALERT: O campo está vazio, não pode adicionar assim', `${rgbAmarelo}`);
    } else if (resultado) {
        let novoObjeto = {
            nome: input.value
        };
    
        nomesOBJECT.push(novoObjeto);
    
        let subirJSON = JSON.stringify(nomesOBJECT);
        
        localStorage.setItem('meuSQL', subirJSON);

        geraMensagem('SUCCESS: Nome disponivel para adicionar', `${rgbVerde}`);
    } else {
        geraMensagem('ERROR: Nome não adicionado pois já existe no banco de dados', `${rgbVermelho}`);
    }

    const todosLi = document.querySelectorAll('li');

    todosLi.forEach((item) => {
        item.style.animation = `saindo ${1500}ms forwards`;
    });
});

exluir.addEventListener('click', function() {
    let nomesJSON = localStorage.getItem('meuSQL');
    let nomesOBJECT = JSON.parse(nomesJSON);

    const resultado = Array.from(nomesOBJECT).every(function(object) {
        return object.nome !== input.value;
    });

    if (input.value === '') {
        geraMensagem('ALERT: O campo está vazio', `${rgbAmarelo}`);
    } else if (resultado) {
        geraMensagem('ERROR: Não é possivel excluir um nome que não existe', `${rgbVermelho}`);
    } else {
        for (let chave in nomesOBJECT) {
            if (nomesOBJECT[chave].nome === input.value) {
                nomesOBJECT.splice(chave, 1);
                geraMensagem('SUCCESS: Nome removido', `${rgbVerde}`);
            } else {
                
            }
        }
    }

    let subirJSON = JSON.stringify(nomesOBJECT);
        
    localStorage.setItem('meuSQL', subirJSON);

    const todosLi = document.querySelectorAll('li');

    todosLi.forEach((item) => {
        item.style.animation = `saindo ${1500}ms forwards`;
    });
});


/* Gerando o Banco */
(function() {
    const meuBanco = localStorage.getItem('meuSQL');

    if (meuBanco) {
        console.log('Status Banco: OK');
    } else {
        console.log('Status Banco: Criado!');
        
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
    }
})();