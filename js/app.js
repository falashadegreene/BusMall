'use strict';

// **** Global Variables ****

let voteCount = 25;
let allProduct = [];

// **** DOM References ****

let imgContainer = document.getElementById('image-container');
let imgOne = document.getElementById('img-one');
let imgTwo = document.getElementById('img-two');
let imgThree = document.getElementById('img-three');

let seeResultsBtn = document.getElementById('see-results-btn');
let reslutsList = document.getElementById('results-list');

// **** Constructor ****

function Product(name, fileExtension = 'jpeg') {
  this.name = name;
  this.views = 0;
  this.votes = 0;
  this.photo = `img/${name}.${fileExtension}`;

  allProduct.push(this);
}

new Product('bag');
new Product('banana');
new Product('bathroom');
new Product('boots');
new Product('breakfast');
new Product('bubblegum');
new Product('chair');
new Product('cthulhu');
new Product('dog-duck');
new Product('dragon');
new Product('pen');
new Product('pet-sweep');
new Product('scissors');
new Product('shark');
new Product('sweep', 'png');
new Product('tauntaun');
new Product('unicorn');
new Product('water-can');
new Product('wine-glass');

// **** Helper function/Code ****

function getRandomIndex() {
  return Math.floor(Math.random() * allProduct.length);
}

let randomProduct = [];

function renderImages() {

  while (randomProduct.length < 3) {
    let RandomNumber = getRandomIndex();
    while (!randomProduct.includes(RandomNumber)) {
      randomProduct.push(RandomNumber);
    }

  }
  let productOneIndex = randomProduct.pop();
  let productTwoIndex = randomProduct.pop();
  let productThreeIndex = randomProduct.pop();

  imgOne.src = allProduct[productOneIndex].photo;
  imgOne.alt = allProduct[productOneIndex].name;
  allProduct[productOneIndex].views++;

  imgTwo.src = allProduct[productTwoIndex].photo;
  imgTwo.alt = allProduct[productTwoIndex].name;
  allProduct[productTwoIndex].views++;

  imgThree.src = allProduct[productThreeIndex].photo;
  imgThree.alt = allProduct[productThreeIndex].name;
  allProduct[productThreeIndex].views++;

}

renderImages();

// *** Event Handlers ****

function handleClick(event) {
  voteCount--;

  let imgClicked = event.target.alt;

  for(let i = 0; i < allProduct.length; i++){
    if(imgClicked === allProduct[i].name){
      allProduct[i].votes++;
    }
  }
  renderImages();

  if(voteCount === 0){
    imgContainer.removeEventListener('click', handleClick);
  }

}

function handleShowResults(){
  if(voteCount === 0){
    for(let i = 0; i < allProduct.length; i++){
      let liElement = document.createElement('li');
      liElement.textContent = `${allProduct[i].name} had ${allProduct[i].votes} votes, and was seen ${allProduct[i].views} times.`;
      reslutsList.appendChild(liElement);
    }
  }
}

// **** Event Listener ****

imgContainer.addEventListener('click', handleClick);
seeResultsBtn.addEventListener('click', handleShowResults);