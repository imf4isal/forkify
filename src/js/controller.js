import * as model from './model.js';
import recipeView from './view/recipeView.js';
import searchView from './view/searchView.js';
import resultView from './view/resultView.js';
import paginationView from './view/paginationView.js';
// import icons from '../img/icons.svg';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

// if (module.hot) {
//   module.hot.accept();
// }

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);
    if (!id) return;
    recipeView.renderSpinner();

    // 1. loading recipe
    await model.loadRecipe(id);

    // 2/ rendering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    recipeView.renderError();
  }
};

const controlSearchResult = async function () {
  try {
    resultView.renderSpinner();

    const query = searchView.getQuery();

    if (!query) return;
    await model.loadSearchResults(query);

    resultView.render(model.getSearchResultsPage());

    paginationView.render(model.state.search);
  } catch (err) {
    console.log(err);
  }
};

const controlPagination = function (goTo) {
  resultView.render(model.getSearchResultsPage(goTo));

  paginationView.render(model.state.search);
};

const init = function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResult);
  paginationView.addHandlerClick(controlPagination);
};
init();

// design pattern in programming is just standard solution of certain kind of problems
