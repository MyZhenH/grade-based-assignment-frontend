const navbar = document.querySelector(".navbar");
const detailsPage = document.querySelector("#details-page");
const detail = document.querySelector(".detail")
const homePage = document.querySelector("#home-page")
const newCocktailBtn = document.querySelector(".newCocktail-Btn");
const cocktailName = document.querySelector(".cocktailName");
const cocktailImg = document.querySelector(".cocktailImg")
const homeContainer = document.querySelector(".home-container")


//***************Navbar*****************/

//AddEventListener
navbar.addEventListener("click", handleOnNavbarClick);

//Function
function handleOnNavbarClick(event) {
  const classList = event.target.classList;
  if (classList.contains("link")) return handleOnLinkClick(event.target.id);
}

function handleOnLinkClick(id) {
  if (id === "home-link") {
    homePage.classList.add("open");
    detailsPage.classList.remove("open");
    searchPage.classList.remove("open");
    randomCocktail();
  }


  if (id === "search-link") {
    homePage.classList.remove("open");
    detailsPage.classList.remove("open");
    searchPage.classList.add("open");
  
  }  
}

const body = document.querySelector("body")

body.addEventListener("click", handleOnSeeMore);

function handleOnSeeMore(event){
  const seeMore = event.target.classList;
  if(seeMore.contains("seeMore-Btn")) return handleOnSeeMoreClick(event.target.id);
}

function handleOnSeeMoreClick(id){
  if (id === "seeMore"){
    detail.classList.add("open")
    homePage.classList.remove("open")
    searchPage.classList.remove("open")
    getDetailInfo()
   
  }
}


//*****************Home Page**********************/
// Använderen ska bli presenterad med en randomiserad cocktail varje gång användaren besöker startsidan.
// Om användaren inte är "nöjd" med cocktailen som visas så ska det finnas ett knapp man kan trycka på för att generera en ny cocktail.

// const navbar = document.querySelector(".navbar");
// const detailsPage = document.querySelector("#details-page");
// const detail = document.querySelector(".detail")

// const homePage = document.querySelector("#home-page")
// const newCocktailBtn = document.querySelector(".newCocktail-Btn");
// const cocktailName = document.querySelector(".cocktailName");
// const cocktailImg = document.querySelector(".cocktailImg")

// const homeContainer = document.querySelector(".home-container")

cocktailName.textContent=randomCocktail();
newCocktailBtn.addEventListener("click", randomCocktail);

//Function
async function randomCocktail() {
    try {
        const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");
        const data = await response.json(); 

        const cocktail = data.drinks[0].strDrink;
        const image = data.drinks[0].strDrinkThumb;
        const id = data.drinks[0].idDrink;

    if (homeContainer){
        cocktailName.innerText = cocktail;
        cocktailName.id = id; 
        cocktailImg.src=image
        cocktailImg.alt=cocktail
        cocktailImg.id=id; 
    }
    
    } catch (error) {
        console.error(error);
    }   
}


//***************Details page************************/
// Det ska finnas en knapp/länk med "See more" som ska leda till detaljsidan om den specifika cocktailen. 
// På denna sida ska användaren presenteras med detaljerad information om den valda cocktailen. Följande information ska finnas: Kategori, Bild, Taggar, Instruktioner hur man gör den. Ingredienser och mängder. Vilket glas den ska serveras i

import {mapRawCocktailData } from "./utilities.js";
const cocktailInfo = document.querySelector(".cocktailInfo")


async function getDetailInfo(){
    try{
    const cocktailId = document.querySelector(".cocktailName").id;
    console.log(cocktailId)

      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${cocktailId}`)

      const rawCocktial = await response.json();
      console.log(rawCocktial)
      console.log(cocktailId)

      const detail = rawCocktial.drinks[0];
      const showDetail = mapRawCocktailData(detail);
      console.log(showDetail)

      const name = showDetail.name;
      const img = showDetail.thumbnail;
      const id = showDetail.id;
      const tags = showDetail.tags; 
      const category = showDetail.category
      const ingredients = showDetail.ingredients;
      const instructions = showDetail.instructions;
      const glass = showDetail.glass;

      console.log(ingredients) 

    //Map och join
    ingredients.map(getAllIngredient);
    function getAllIngredient(ingredient){
      return [ingredient.ingredient, ingredient.measure].join(" ")
    }

    const ingredient = ingredients.map(getAllIngredient)
    console.log(ingredient)
    const ingredientToString = ingredient.join(", ")
    console.log(ingredientToString)

    //The content of the details page
    cocktailInfo.innerHTML = 
    `<h1>${name}</h1>
    <img src=${img} alt="${name}" id="${id}"</img>
    <p><span>Tags:</span> ${tags} </p>
    <p><span>Category:</span> ${category} </p>
    <p><span>Glass:</span> ${glass} </p>
    <p><span>Ingredients:</span> ${ingredientToString} </p>
    <p><span>Instructions:</span> ${instructions} </p>`
    

    }catch (error){
      console.log(error)
    }
} 


//**********************Search Page**************************/
// Söksida enligt följande
// Användare ska kunna söka på cocktails efter namn
// Sidan ska innehålla ett formulär för sökningen
// Sökresultaten ska visas som en lista med namnet på de olika cocktailsen.
// Klickar man på en cocktail i listan ska man komma till detaljsidan för den cocktailen.

const searchPage = document.querySelector("#search-page")
const searchBtn = document.querySelector(".search-Btn");
const getInputValue = document.querySelector("#inputValue");
const drinkContainer = document.querySelector(".drink-container")

//Search button
searchBtn.addEventListener("click", inputValue);

//Function - När man trycker på search button.
function inputValue(){
    const value = getInputValue.value;
    searchCocktail(value)
    getInputValue.value="";
    drinkContainer.innerHTML="";
    
} 
async function searchCocktail(inputValue){
    try{
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${inputValue}`)
    
        const data = await response.json();
        console.log(data)
        console.log(inputValue)
   

      data.drinks.forEach(drink => {
      const createDiv = document.createElement("div");
      createDiv.classList.add("cocktail-drink");
      createDiv.innerHTML=`
      <h2 class="cocktailName" id="${drink.idDrink}">${drink.strDrink}</h2> 
      <img src=${drink.strDrinkThumb} id=${drink.idDrink} alt="${drink.strDrink}"</img>
      <button class="seeMore-Btn" id="seeMore">See more</button>`
      drinkContainer.appendChild(createDiv);
      
  });

      }catch (error){
        console.log(error)
      }
  
}
