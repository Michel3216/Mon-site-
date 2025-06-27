let x = document.querySelector(".span1");
let loupe= document.querySelector(".button1");
let hea=document.querySelector(".header1"); 
let heaf=document.querySelector(".header1f"); 
let divtrois=document.querySelector(".div3"); // formulaire
let span = document.querySelector(".span1"); 
let spans = document.querySelector(".annuler"); 
loupe.addEventListener("click", boruto);
x.addEventListener("click", Naruto);

function Naruto() {
  let div = document.querySelector(".div2");
  div.style.display = "block";
  hea.style.display = "none";
  heaf.style.borderBottom="1px solid rgba(225,225,225,0.2) "

  let angy = document.querySelector(".span1");
  angy.style.display = "none";

  document.body.style.overflow = "hidden";

  // Vérifie si la croix n'existe pas déjà
  if (!document.querySelector("#span2")) {
    let sasuke = document.createElement("span");
    sasuke.id = "span2";
    let itachi = document.createTextNode("✖");
    sasuke.appendChild(itachi);

    let sasori = document.querySelector(".div2");
    sasori.appendChild(sasuke);

    sasuke.style.color = "red";
    sasuke.style.position = "absolute";
    sasuke.style.top = "20px";
    sasuke.style.right = "20px";
    sasuke.style.fontSize = "32px";
    sasuke.addEventListener("click", () => {
      div.style.display = "none";
      document.body.style.overflow = "auto";
      hea.style.display = "flex";
      sasuke.remove();
      angy.style.display = "block";
    });
  }
}

function boruto() {
  hea.style.display = "none";
  span.style.display = "none";
  divtrois.style.display = "flex";
  spans.style.display = "flex";
}
spans.addEventListener("click", () => {
    divtrois.style.display="none";
    hea.style.display = "flex";
    span.style.display = "flex";
  });
  
 function ouvrir(){
  let rech=document.querySelector(".recherche").value.toLowerCase()
  if(rech==="page"){
    window.open("page.html")
  } else if (rech==="na") {
    window.open("Naruto.html")
  }
  let input = document.querySelector(".recherche");
input.addEventListener("keyup", function(e) {
  if (e.key === "Enter") {
    ouvrir();
  }
});

  }
