function enviarDados(){
    /* qual a lógica desta funcao? 
    1 - capturar o que o usuário digitou nos campos de INPUT
    2 - montar uma mensagem para enviar ao back-end
    3 - fazer o envio desta mensagem 
    4 - tratar o resultado
    */

    // passo 1
    var txtLogin = document.getElementById("txtLogin").value;
    var txtSenha = document.getElementById("txtSenha").value;

    console.log("valores digitados = "+txtLogin+" / " + txtSenha);

    // passo 2
    var msgBody = {
        racf : txtLogin,
        email: txtLogin,
        senha: txtSenha
    };

    var cabecalho = {
        method: "POST",
        body  : JSON.stringify(msgBody),
        headers : {
            "content-type": "application/json"
        }
    };

    // passos 3 e 4
    fetch("http://localhost:8080/login",cabecalho).then(res => trataResultado(res));
}

function trataResultado(res){
    if (res.status == 200){
        res.json().then(user => {
            // "logar o usuario"
            localStorage.setItem("userDASH",JSON.stringify(user));
            // redirecionar para a pagina de seleção de relatórios
            window.location = "relatorios.html";
        })
    }
    else if (res.status == 403){
        document.getElementById("msgErro").innerHTML = "Acesso Negado - Verifique Usuario/Senha";
    }
    else{
        document.getElementById("msgErro").innerHTML = "Erro Desconhecido";
    }
}