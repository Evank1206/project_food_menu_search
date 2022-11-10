import { domElement } from "../model/base_DOM";

// 1. write clear function
export const clearRecip = () =>{
    domElement.recipe.innerHTML = "";
};
// ingrindents render function return whole html
const ingre_html =  incre => 
    `<li class="recipe__item">
        <svg class="recipe__icon">
            <use href="img/icons.svg#icon-check"></use>
        </svg>
        <div class="recipe__ingredient">
        ${incre}
        </div>
    </li>`;
// 2. write display function
export const displayRecip = (rec) => {
    /*
        this.publisher = result.data.recipe.publisher;
        this.title = result.data.recipe.title;
        this.inredients = result.data.recipe.ingredients;
        this.image_url = result.data.recipe.image_url;
        this.source_url = result.data.recipe.source_url;
        this.social_rank = result.data.recipe.social_rank; */
        // console.log(rec.inredients);
    let hmtl = 
    `<figure class="recipe__fig">
        <img src="${rec.image_url}" alt="${rec.title}" class="recipe__img">
        <h1 class="recipe__title">
            <span>${rec.title}</span>
        </h1>
    </figure>
    <div class="recipe__details">
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--minutes">45</span>
            <span class="recipe__info-text"> минут </span>
        </div>
        <div class="recipe__info">
            <svg class="recipe__info-icon">
                <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span class="recipe__info-data recipe__info-data--people">4</span>
            <span class="recipe__info-text"> хүний орц</span>

            <div class="recipe__info-buttons">
                <button class="btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-minus"></use>
                    </svg>
                </button>
                <button class="btn-tiny">
                    <svg>
                        <use href="img/icons.svg#icon-circle-with-plus"></use>
                    </svg>
                </button>
            </div>

        </div>
        <button class="recipe__love">
            <svg class="header__likes">
                <use href="img/icons.svg#icon-heart-outlined"></use>
            </svg>
        </button>
    </div>

    <div class="recipe__ingredients">
        <ul class="recipe__ingredient-list">
            ${rec.inredients.map(el => ingre_html(el))}
        </ul>

        <button class="btn-small recipe__btn">
            <svg class="search__icon">
                <use href="img/icons.svg#icon-shopping-cart"></use>
            </svg>
            <span>САГСАНД ХИЙХ</span>
        </button>
    </div>

    <div class="recipe__directions">
        <h2 class="heading-2">Хэрхэн бэлтгэх вэ</h2>
        <p class="recipe__directions-text">
            Жорыг бэлтгэж оруулсан
            <span class="recipe__by">${rec.publisher}</span>. Манай вэб сайтаас жорын зааврыг авна уу
        </p>
        <a class="btn-small recipe__btn" href="${rec.source_url}" target="_blank">
            <span>ЗААВАР ҮЗЭХ</span>
            <svg class="search__icon">
                <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>

        </a>
    </div>
    `
    domElement.recipe.insertAdjacentHTML('afterbegin', hmtl);

};
