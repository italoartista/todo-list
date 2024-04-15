let input = document.getElementById('tarefa');
let button = document.getElementById('adicionar');
let lista = document.getElementById('lista');

console.log(input, button, lista);

button.addEventListener('click', function() {

    if(input.value !== '') {
        let tarefa = input.value;
        let item = document.createElement('li');
        let span = document.createElement('span');
        let remover = document.createElement('button');
        let editar = document.createElement('button');

        remover.textContent = 'Remover';
        editar.textContent = 'Editar';

        remover.addEventListener('click', removerTarefa);
        editar.addEventListener('click', editarTarefa);
        
        span.textContent = tarefa;
        
        item.appendChild(span);
        item.appendChild(remover);
        item.appendChild(editar);
        lista.appendChild(item);
        
        input.value = '';
    } else { 
        input.placeholder = 'Digite uma tarefa válida';
        input.placeholder.style.color = 'red';
        input.style.border = '1px solid red';
    }
  
});

function removerTarefa(event) {
    let item = event.target.parentElement;
    lista.removeChild(item);
}

function editarTarefa(event) {
    let item = event.target.parentElement;  

    let novoInput = document.createElement('input');
    novoInput.type = 'text';

    let salvar = document.createElement('button');
    salvar.textContent = 'Salvar';
    
    let span = item.querySelector('span');
    novoInput.value = span.textContent;

    salvar.addEventListener('click', function() {
        span.textContent = novoInput.value;
        item.removeChild(novoInput);
        item.removeChild(salvar);
        item.firstChild.style.display = 'inline';
        item.querySelectorAll('button')[0].style.display = 'inline';
        item.querySelectorAll('button')[1].style.display = 'inline';

    });


    item.appendChild(novoInput);
    item.appendChild(salvar);
    item.firstChild.style.display = 'none';
    item.querySelectorAll('button')[0].style.display = 'none';
    item.querySelectorAll('button')[1].style.display = 'none';
}


