"use strict";

const form = document.querySelector("form");
const table = document.querySelector("tbody");
const button = document.querySelector("#clear-button");
const inputJmeno = document.getElementById("exampleInputJmeno");
const inputVek = document.getElementById("exampleInputVek");
const inputPrijmeni = document.getElementById("exampleInputPrijmeni");
const inputTelefon = document.getElementById("examplePhoneNumber");

// Zamenjuje if..else (if = ?) (else = :)
let pojistenci = [
  { jmeno: "Jan Novák", vek: "31", telefon: "731 584 972" },
  { jmeno: "Josef Nový", vek: "25", telefon: "725 454 414" },
  { jmeno: "Hanka Blatná", vek: "25", telefon: "603 417 895" },
];
const data = pojistenci;

const thMaker = (item) => {
  const tr = document.createElement("tr");
  table.append(tr);

  const tdjmeno = document.createElement("td");
  tdjmeno.innerHTML = item.jmeno;
  tr.appendChild(tdjmeno);

  const tdtelefon = document.createElement("td");
  tdtelefon.innerHTML = item.telefon;
  tr.appendChild(tdtelefon);

  const tdvek = document.createElement("td");
  tdvek.innerHTML = item.vek;
  tr.appendChild(tdvek);
};

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const newItem = new Pojistenec(
    inputJmeno.value + " " + inputPrijmeni.value,
    inputVek.value,
    inputTelefon.value
  );

  pojistenci.push(newItem);
  console.log(newItem);

  thMaker(newItem);
  inputJmeno.value = "";
  inputVek.value = "";
  inputTelefon.value = "";
  inputPrijmeni.value = "";
});

data.forEach((item) => {
  thMaker(item);
});

/* localStorage.setItem("jmeno", "Karel");
console.log(localStorage.getItem("jmeno"));
console.log(localStorage.removeItem("jmeno")); */
