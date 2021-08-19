function gerarRelatorio(){
    var dtIni = document.getElementById("txtDataIni").value;
    var dtFim = document.getElementById("txtDataFim").value;

    var url = "http://localhost:8080/eventos?ini="+dtIni+"&fim="+dtFim;

    fetch(url).then(res => res.json()).then(listaEventos => preencheTabela(listaEventos));

    /* se eu fosse ler como uma instrução estruturada

    res = fetch(url);
    listaEventos = res.json();
    preencheTabela(listaEventos);

    */

}

function preencheTabela(listaEventos){
    console.log(listaEventos);

}