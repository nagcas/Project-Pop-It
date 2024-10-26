// Seleziona l'elemento DOM con l'ID "nav" e lo assegna alla costante "nav"
const nav = document.querySelector("#nav");
// Seleziona l'elemento DOM con l'ID "open" (il pulsante per aprire il menu) e lo assegna alla costante "open"
const open = document.querySelector("#open");
// Seleziona l'elemento DOM con l'ID "close" (il pulsante per chiudere il menu) e lo assegna alla costante "close"
const close = document.querySelector("#close");

// Aggiunge un event listener per il click al pulsante "open"
// Quando il pulsante viene cliccato, viene aggiunta la classe "visible" all'elemento "nav"
// Questo renderà visibile il menu laterale
open.addEventListener("click", () => {
    nav.classList.add("visible");
});

// Aggiunge un event listener per il click al pulsante "close"
// Quando il pulsante viene cliccato, viene rimossa la classe "visible" dall'elemento "nav"
// Questo farà scomparire il menu laterale
close.addEventListener("click", () => {
    nav.classList.remove("visible");
})