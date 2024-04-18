const searchInput = document.querySelector('#search');
const resultsList = document.querySelector('#results');
const searchBtn = document.getElementById('submit');

async function searchRecipes() {
  const app_id = '29bd7d2f';
  const app_key = '9b93c3aff1d772a7154fc3d332a86331';

  const searchValue = searchInput.value.trim();

  fetch(
    `https://api.edamam.com/search?q=${searchValue}&app_id=${app_id}&app_key=${app_key}&from=0&to=10`
  )
    .then((response) => response.json())
    .then((recipe) => {
      // console.log(recipe);
      // console.log(recipe.hits);

      displayResults(recipe.hits);
    });
}

// https://api.edamam.com/api/food-database/v2/parser?app_id=3b877035&app_key=e315cacfe8986e6a7a2118054f31b7f6&ingr=adobo

function displayResults(recepes) {
  let html = '';

  recepes.forEach((recipe) => {
    html += `
    <div>
        <img src="${recipe.recipe.image}" alt="${recipe.recipe.label}">
        <h3>${recipe.recipe.label}</h3>
        <ul>
            ${recipe.recipe.ingredientLines
              .map((ingredient) => `<li>${ingredient}</li>`)
              .join('')}
        </ul>
        <a href="${recipe.recipe.url}" target="_blank">View Recipe</a>
    </div> `;
  });

  resultsList.innerHTML = html;
}

searchBtn.addEventListener('click', searchRecipes);
