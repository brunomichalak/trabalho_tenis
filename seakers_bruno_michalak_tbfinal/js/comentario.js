function enviar(){
    var nome = document.getElementById("nome")
    var email= document.getElementById("email")
    var ok
    if(nome.value!="" && nome.value.indexOf(" ")!=-1){
        if(email.value.indexOF("@")!=-1){
            alert(nome.value+" agradecemos ocontato")
            ok=true
        }
        else{
            alert("digite email valido")
        }
        alert(nome.value+" agradecemos o seu contado")
        ok=false
    }
    else{
        alert("preencha seu nome completo")
        ok=false
    }
    return ok
}