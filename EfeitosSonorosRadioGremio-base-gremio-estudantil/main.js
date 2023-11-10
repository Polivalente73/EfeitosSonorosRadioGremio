function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}
const listaDeTeclas = document.querySelectorAll(".tecla");

let contador = 0;
while(contador < listaDeTeclas.length){
    const efeito = listaDeTeclas[contador].classList[1];
    const idAudio = "#som_"+efeito;
    listaDeTeclas[contador].onclick = function(){
        tocaSom(idAudio);
    }
    contador = contador + 1;
   
}





















//function tocaSomAplausos() {
//



//*/function tocaSomVaia() {
   // document.querySelector("#som_tecla_vaia").play();


//function tocaSomRisada() {
   // document.querySelector("#som_tecla_risada").play();

//function tocaSomErrado() {
   // document.querySelector("#som_tecla_errado").play();

//function tocaSomGrilo() {
   // document.querySelector("#som_tecla_grilo").play();

//function tocaSomBateria() {
    //document.querySelector("#som_tecla_tambores").play();

//function tocaSomTrombeta() {
   // document.querySelector("#som_tecla_trombeta").play();

//function tocaSomDinheiro() {
    ////document.querySelector("#som_tecla_dinheiro").play();

//function tocaSomVitoria() {
   // document.querySelector("#som_tecla_vitoria").play();


//const listaDeTeclas = document.querySelectorAll(".tecla");
//listaDeTeclas[0].onclick = tocaSomAplausos;
//listaDeTeclas[1].onclick = tocaSomVaia;
//listaDeTeclas[2].onclick = tocaSomRisada;
//listaDeTeclas[3].onclick = tocaSomErrado;
//listaDeTeclas[4].onclick = tocaSomGrilo;
//listaDeTeclas[5].onclick = tocaSomBateria;
//listaDeTeclas[6].onclick = tocaSomTrombeta;
//listaDeTeclas[7].onclick = tocaSomDinheiro;//
//listaDeTeclas[8].onclick = tocaSomVitoria;

// Você pode adicionar mais atribuições de eventos para os outros botões aqui
