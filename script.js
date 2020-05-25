
// Fonctionnalité 1 :

let footerClick = document.querySelector('footer');
footerClick.addEventListener('click',fonctionClickFooter);

function fonctionClickFooter(){
  console.log("clique");
}

// Fonctionnalité 1-bis :

let countClick = 1;
footerClick.addEventListener('click',fonctionCountClick);

function fonctionCountClick(){
  console.log("clic numéro " + `${countClick}`);
  countClick ++;
}

// Fonctionnalité 2 :

let burger = document.getElementById('navbarHeader');
let button = document.getElementsByClassName('navbar-toggler')[0];


button.addEventListener('click', fonctionCollpase);

function fonctionCollpase(){
  burger.classList.toggle("collapse");
}

// Fonctionnalité 3 :

let btnEdit1 = document.querySelectorAll("div.btn-group > button")[1];
let textCard1 = document.querySelectorAll("p.card-text")[0];

btnEdit1 .addEventListener('click', fonctionTextColorRed);

function fonctionTextColorRed() {
  textCard1.classList.add("text-danger");
}

// Fonctionnalité 4 :

let btnEdit2 = document.querySelectorAll("div.btn-group > button")[3];
let textCard2 = document.querySelectorAll("p.card-text")[1];

btnEdit2.addEventListener('click', fonctionTextColorGreen);

function fonctionTextColorGreen() {
  textCard2.classList.toggle("text-success");
}

// Fonctionnalité 5 :

let navbar = document.getElementsByClassName("navbar")[0];
let bootstrap = document.querySelector("head > link");
let body = document;
// console.log(navbar);
// console.log(bootstrap);
// console.log(body);


navbar.addEventListener('dblclick', fonctionDelBootstrap, true);
body.addEventListener('dblclick', fonctionAddBootstrap, true);

function fonctionDelBootstrap(e) {
  bootstrap.removeAttribute("href");
  e.preventDefault();
}

function fonctionAddBootstrap() {
  bootstrap.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css";
}

// Fonctionnalité 6 :

let btnView = document.querySelectorAll("div.btn-group > button.btn-success");
let allCards = document.getElementsByClassName("col-md-4")
let textCard = document.querySelectorAll("p.card-text");
let images = document.getElementsByTagName('img');

// console.log(btnView);
// console.log(allCards);
// console.log(textCard);


for (let i = 0; i < allCards.length; i++) {

  btnView[i].addEventListener('mouseover', fonctionSmallCard);

function fonctionSmallCard() {
  if (textCard[i].style.display !== 'none') {
  textCard[i].style.display = 'none';
  images[i].style.width = '20%';
} else {
  images[i].style.width = '100%';
  textCard[i].style.display = '' ;
}}}

// Fonctionnalité 7 :

let btnGray = document.querySelector("p > a.btn-secondary");
// console.log(btnGray);

btnGray.addEventListener('click', fonctionChangePlace);

function fonctionChangePlace() {

let parentCard = document.getElementsByClassName("row")[1];
let cardSix = document.getElementsByClassName("col-md-4")[5];

  parentCard.insertBefore(cardSix, parentCard.firstChild);

}

// Fonctionnalité 8 :

let btnBlue = document.querySelector("p > a.btn-primary");
// console.log(btnGray);

btnBlue.addEventListener('click', fonctionNoRef);

function fonctionNoRef(e) {
  btnBlue.removeAttribute("href");
  e.preventDefault();
}

btnBlue.addEventListener('click', fonctionChangePlaceRev);

function fonctionChangePlaceRev() {

let parentCard = document.getElementsByClassName("row")[1];
let cardOne = document.getElementsByClassName("col-md-4")[0];
let cardSix = document.getElementsByClassName("col-md-4")[5];

parentCard.insertBefore(cardOne, cardSix.nextSibling);
}

// Fonctionnalité 9 :

let brand = document.getElementsByClassName("navbar-brand")[0];
let container = document.getElementsByClassName("container")[3];
let cards = document.querySelectorAll("div.col-md-4");
console.log(cards);
console.log(brand);
console.log(container);


brand.addEventListener('keypress', fonctionKeypress, false);


function fonctionKeypress(){


if (event.keyCode == "97") {

  container.style.marginLeft = 'inherit';
  container.style.marginRight = 'auto';

  for (let i = 0; i < 6; i++) {
    cards[i].classList.add('col-md-3');
    cards[i].classList.remove('col-md-4');
  }
}

else if (event.keyCode == "121") {

  container.style.marginLeft = 'auto';
  container.style.marginRight = 'auto';

  for (let i = 0; i < 6; i++) {
    cards[i].classList.add('col-md-3');
    cards[i].classList.remove('col-md-4');
  }
}

else if (event.keyCode == "112") {

  container.style.marginRight = 'inherit';
  container.style.marginLeft = 'auto';

    for (let i = 0; i < 6; i++) {
    cards[i].classList.add('col-md-3');
    cards[i].classList.remove('col-md-4');
  }
}


else if (event.keyCode == "98") {

  container.style.marginLeft = 'auto';
  container.style.marginRight = 'auto';

  for (let i = 0; i < 6; i++) {
    cards[i].classList.add('col-md-4');
    cards[i].classList.remove('col-md-3');
  }
}
}