let contador = 0;
let input = document.getElementById('inputtarefas');
let bntadd = document.getElementById('btn-add');
let main = document.getElementById('AreaLista');



// Seleciona o ícone do menu e o menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Adiciona o evento de clique
menuToggle.addEventListener('click', function() {
    // Alterna a classe 'active' no ícone e no menu
    menuToggle.classList.toggle('active');
    menu.classList.toggle('active');
});

function addtarefas() {
    //pegar o valor digitado
    let valorInput = input.value;

        if ((valorInput !=="") && (valorInput !==null) && (valorInput!== undefined ))
            { ++contador;
//adicionar novo items no main
            let novoItem = ` <div id ="${contador}"class="item">

            <div onclick= "marcarTarefa(${contador})" class="item-icone">
                <i id ="icone_${contador}"class="far fa-circle"></i> <!-- ícone de círculo contornado -->
            </div>
            <div onclick= "marcarTarefa(${contador})"    class="item-nome">
           ${ valorInput}
            </div>
            
            <div class="item-botao">
                <button onclick= "deletar(${contador})" class="delete"> <i class="far fa-trash-alt"></i>  deletar</button>
            </div>
        </div>  `;

main.innerHTML += novoItem;
//limpar cpinhos
input.value="";
input.focus();

        }

}
function deletar(id){

    var tarefa = document.getElementById(id);

tarefa.remove();
}
function marcarTarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');

    if(classe == "item"){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_'+id);
        icone.classList.remove('far', 'fa-circle'); // Remove o ícone de círculo contornado
        icone.classList.add('fas', 'fa-check-circle'); // Adiciona o ícone de check preenchido

        item.parentNode.appendChild(item);
        //vai para o final
    }else{
        item.classList.remove('clicado');

        var icone = document.getElementById('icone_'+id);

        icone.classList.add('far', 'fa-circle'); // Remove o ícone de círculo contornado
        icone.classList.remove('fas', 'fa-check-circle'); // Adiciona o ícone de check preenchido
    }

}
input.addEventListener("keyup", function(event){

    if(event.keyCode == 13){
        event.preventDefault();
        bntadd.click();
    }

} )

