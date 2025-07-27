function displayRecipe(response) {
  console.log("recipe generated");
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 50,
    cursor: "",
  });
}

function generateCocktail(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "f5a4e6bad3905o7b973dca79f0etf342";
  let prompt = `User instructions are: generate a recipe for a cocktail including ingredient ${instructionsInput.value}`;
  let context =
    "You are an expert cocktail mixologist and love to create simple and delicious cocktails. Your mission is to create a cocktail using fewer than five ingredients, following the user instructions.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  alert(
    `Generating delicious cocktail recipe using ${instructionsInput.value}`
  );
  console.log(`prompt: ${prompt}`);
  console.log(`context: ${context}`);
  axios.get(apiUrl).then(displayRecipe);
}

let cocktailFormElement = document.querySelector("#cocktail-generator-form");
cocktailFormElement.addEventListener("submit", generateCocktail);
