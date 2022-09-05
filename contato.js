
function enviarEmail() {
    var link = "mailto:andre.021arj@gmail.com"
             + "?cc="   
             + "&subject=" + encodeURIComponent(document.querySelector('#email').value)
             + "&body=" + encodeURIComponent(document.querySelector('#mensagem').value)
    ;
    
    window.location.href = link;
    limpar();
}

function limpar(){
document.querySelector('#email').value=""
document.querySelector('#mensagem').value = ""
}