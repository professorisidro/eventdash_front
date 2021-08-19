function carregaInfo(){
    // antes de mais nada... vou verificar se tenho o objeto no LocalStorage
    var userSTR = localStorage.getItem("userDASH"); // tento recuperar do localStorage
    if (!userSTR) {  // se esse cara não existir
        window.location = "index.html";
    }

    // então o usuario existe.

    var user = JSON.parse(userSTR);  // como eu gravei em fomato texto, vou reconverter para objeto em memória

    document.getElementById("fotoUser").innerHTML = `<img src="${user.linkFoto}"  width="100%">`;
    document.getElementById("bioUser").innerHTML = `<h4> ${user.nome} </h4>
                                                    <hr>
                                                    <b> RACF: </b> ${user.racf} <br>
                                                    <b> Email: </b> ${user.email} <br>
                                                    <b> Departamento: </B> ${user.departamento} <br>
                                                    <button type="button" class="btn btn-primary" onclick="logout()"> Logout </button>`;
}

function logout(){
    localStorage.removeItem("userDASH");
    window.location = "index.html";
}