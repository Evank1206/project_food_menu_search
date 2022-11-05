import { before, lodash, tap } from "lodash";
import {domElement} from "../model/base_DOM";
// html for displaying results
const render_Rec = (e) => {
    // console.log(e);
    // console.log(e.title);
    // console.log(e.image_url);

    let list = 
    `<li>
        <a class="results__link" href=#${e.recipe_id}>
            <figure class="results__fig">
                <img src=${e.image_url} alt="Test">
            </figure>
            <div class="results__data">
                <h4 class="results__name">${e.title}</h4>
                <p class="results__author">${e.publisher}</p>
            </div>
        </a>
    </li>`;
// loading sign 
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

};
// to display ingredets recipies result html
// const ingredets_recipies = (a,b,c,d,e,f) =>{
//     let detail = 
//     `
    
//     `
// }
// button's html: type = "prev" OR "next"
const htmlButton = (pageNum, type, diraction) => 
`
<button class="btn-inline results__btn--${type}" data-goto=${pageNum}>
<svg class="search__icon">
    <use href="img/icons.svg#icon-triangle-${diraction}"></use>
</svg>
<span>Хуудас ${pageNum}</span>
</button>
`;

// html for displaying buttons for next & previouse pages
const renderBtn = (cPage, tPage) =>{
    let button;
    // check the condition
    if(cPage === 1 && tPage > 1){
        // to show NEXT button  "rigth & left" are direction arrow
       button =  htmlButton(2, "next", 'right')
    }else if(cPage < tPage){
        // to show PREVIUOS and NEXT button
       button =  htmlButton(cPage -1, "prev", "left")
       button +=  htmlButton(cPage +1, "next", "right")
    }else if(cPage === tPage){
        // to show PREVIUOS button
       button = htmlButton(cPage-1, "prev", "left")
    }
    domElement.showBtn.insertAdjacentHTML("afterbegin", button)
};
// to get value form user-input then pass it
export const getInput = () => domElement.input__field.value;
// to clear input after click submit button
export const clearInput = () => {
    domElement.input__field.value = '';
    // clear rendered button after clicked difrent button
};
// clear the searched result
export const clearResult = () => {
    domElement.search_result.innerHTML = '';
    // clear the clicked button
    domElement.showBtn.innerHTML = '';

};
// function that recieving recipies by argument and current and nextPage are default page and number of list
export const render_Recipies = (recipies, currentPage = 1, nextPage = 10 ) => {
    // console.log(recipies);
    let start = (currentPage - 1) * nextPage;
    let end = currentPage * nextPage;
    recipies.slice(start, end).forEach(elements => render_Rec(elements));
    // to find out total pages
    let totalPage = Math.ceil(recipies.length / nextPage);
    // display buttons for next page or previouse page
    renderBtn(currentPage, totalPage);
  
};