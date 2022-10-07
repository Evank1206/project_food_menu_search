import { lodash } from "lodash";
import {domElement} from "../base_DOM";

const render_Rec = (e) => {
    // console.log(e);
    // console.log(e.title);
    // console.log(e.image_url);

    let list = 
    `<li>
        <a class="results__link results__link--active" href=${e.recipe_id}>
            <figure class="results__fig">
                <img src=${e.image_url} alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${e.title}</h4>
                <p class="results__author">${e.publisher}</p>
            </div>
        </a>
    </li>`;

let loading = 
    `<div class="loader">
        <svg class="likes__icon">
            <use href="img/icons.svg#icon-cw"></use>
        </svg>
    </div>`;
// to display to the DOM 
domElement.search_result.insertAdjacentHTML("beforeend", list);
// loading icon on the display until select food
domElement.main.innerHTML = loading;

}
// to get value form user-input then pass it
export const getInput = () => domElement.input__field.value;
// to clear input after click submit button
export const clearInput = () => {
    domElement.input__field.value = '';
}
// clear the searched result
export const clearResult = () => {
    domElement.search_result.innerHTML = '';
}
export const render_Recipies = (recipies) => {
    // console.log(recipies);
    recipies.forEach(elements => render_Rec(elements));
    
}