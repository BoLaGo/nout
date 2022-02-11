var medie;
var medieIntrodusa = false;
var nume;
var numeIntrodus = false;
var verificat = false;

var culoare1 = document.getElementById("nume");
var culoare2 = document.getElementById("medie");
var culoare3 = document.getElementById("verifica");
var culoare4 = document.getElementById("reset");

culoare1.style.background = "orange";
culoare2.style.background = "red";
culoare3.style.background = "red";
culoare4.style.background = "red";

function introduNume() {
  nume = window.prompt("Introduceti numele");
  numeIntrodus = true;
  culoare1.style.background = "green";
  culoare2.style.background = "orange";
  culoare3.style.background = "red";
  culoare4.style.background = "red";  
}

function introduMedie() {
  if (numeIntrodus == true && nume) {
    medie = window.prompt("Introduceti media (de exemplu: 9.2, 7.4, 10)");
    medie = parseFloat(medie);
    medieIntrodusa = true;
    culoare1.style.background = "green";
    culoare2.style.background = "green";
    culoare3.style.background = "orange";
    culoare4.style.background = "red"; 
  }
  else {
    window.alert("Te rugam sa iti introduci numele!");
  }

}

function apasaButon() {
  if (medieIntrodusa == true && medie) {
    var titluRezultat = nume + ", rezultatele tale sunt afisate mai jos. Facultatile pentru care esti potrivit sunt urmatoarele:";
    document.querySelector("#text-rezultat").textContent = titluRezultat;
    if (medie >= 9.5) {
      document.getElementById("rezultat1").textContent = "Universitatea din Bucuresti";
      document.getElementById("rezultat2").textContent = "Universitatea Alexandru Ioan Cuza - Iasi";
      document.getElementById("rezultat3").textContent = "Universitatea Lucian Blaga - Sibiu";
      document.getElementById("rezultat4").textContent = "Universitatea Babes-Bolyai - Cluj";
      document.getElementById("rezultat5").textContent = "Universitatea din Timisoara";
      document.getElementById("rezultat6").textContent = "Universitatea din Oradea";
      document.getElementById("rezultat7").textContent = "Universitatea Petru Maior - Targu Mures";
    }
    if (medie >= 9.2 && medie < 9.5) {
      document.getElementById("rezultat2").textContent = "Universitatea Alexandru Ioan Cuza - Iasi";
      document.getElementById("rezultat3").textContent = "Universitatea Lucian Blaga - Sibiu";
      document.getElementById("rezultat4").textContent = "Universitatea Babes-Bolyai - Cluj";
      document.getElementById("rezultat5").textContent = "Universitatea din Timisoara";
      document.getElementById("rezultat6").textContent = "Universitatea din Oradea";
      document.getElementById("rezultat7").textContent = "Universitatea Petru Maior - Targu Mures";
    }
    if (medie >= 9 && medie < 9.2) {
      document.getElementById("rezultat3").textContent = "Universitatea Lucian Blaga - Sibiu";
      document.getElementById("rezultat4").textContent = "Universitatea Babes-Bolyai - Cluj";
      document.getElementById("rezultat5").textContent = "Universitatea din Timisoara";
      document.getElementById("rezultat6").textContent = "Universitatea din Oradea";
      document.getElementById("rezultat7").textContent = "Universitatea Petru Maior - Targu Mures";
    }
    if (medie >= 8.5 && medie < 9) {
      document.getElementById("rezultat5").textContent = "Universitatea din Timisoara";
      document.getElementById("rezultat6").textContent = "Universitatea din Oradea";
      document.getElementById("rezultat7").textContent = "Universitatea Petru Maior - Targu Mures";
    }
    if (medie >= 8 && medie < 8.5) {
      document.getElementById("rezultat7").textContent = "Universitatea Petru Maior - Targu Mures";
    }
    if (medie < 8) {
      document.getElementById("rezultat1").textContent = "Nu ai o medie suficient de mare. Ne pare rau :("
    }
    verificat = true;
    culoare1.style.background = "green";
    culoare2.style.background = "green";
    culoare3.style.background = "green";
    culoare4.style.background = "orange"; 
  }
  else {
    window.alert("Te rugam sa introduci o medie!")
  }
 
}

function reseteaza() {
  if (verificat == true) {
    numeIntrodus = false;
    medieIntrodusa = false;
    medie = 0;
    nume = "";
    document.getElementById("rezultat1").textContent = "";
    document.getElementById("rezultat2").textContent = "";
    document.getElementById("rezultat3").textContent = "";
    document.getElementById("rezultat4").textContent = "";
    document.getElementById("rezultat5").textContent = "";
    document.getElementById("rezultat6").textContent = "";
    document.getElementById("rezultat7").textContent = "";
    var titluRezultatResetat = "Introduceti alt nume!";
    document.querySelector("#text-rezultat").textContent = titluRezultatResetat;
    verificat = false;
    culoare1.style.background = "orange";
    culoare2.style.background = "red";
    culoare3.style.background = "red";
    culoare4.style.background = "red";
  }
  else {
    window.alert("Nu ai date introduse!");
  }
}