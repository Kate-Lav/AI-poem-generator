function generateCocktail(event) {
  event.preventDefault();

  new Typewriter("#recipe", {
    strings: ["Aperol Spritz: ice, 100ml Aperol, 150ml Prosecco, soda"],
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);
