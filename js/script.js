// Il software deve chiedere all’utente il suo nome e il sesso con due prompt diversi.
// Sulla pagina html deve apparire “Ciao <nome>”, il colore del nome deve essere azzurro o rosa a seconda del sesso inserito.

// INSERIMENTI DATI

var nome = prompt("Inserisci il tuo nome");

var sesso = prompt("Inserisci il tuo sesso maschio o femmina");
// CONFRONTO

if (nome == "" || sesso == "") {
  alert("Inserimento non valido");
  nome = prompt("Inserisci il tuo nome");
  sesso = prompt("Inserisci il tuo sesso");
} else if (sesso == "maschio") {
  document.getElementById("risultato").innerHTML = "Ciao" + " ";
  document.getElementById("nome_stampato").innerHTML = nome ;
  nome_stampato.className = "colore_azzurro";

} else if (sesso == "femmina") {
  document.getElementById("risultato").innerHTML = "Ciao" + " ";
  document.getElementById("nome_stampato").innerHTML = nome ;
  nome_stampato.className = "colore_rosa";
}
