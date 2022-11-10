import { domElement } from "../model/base_DOM";
export const display_list =(id, title) =>{
    console.log(id, title);
  if(id){
    let html = 
    `
        <li class="shopping__item">
         <p class="shopping__description">${title}</p>
            <button class="shopping__delete btn-tiny">
                <svg>
                    <use href="img/icons.svg#icon-circle-with-cross"></use>
                </svg>
            </button>
        </li>
    `;
    domElement.shopping_list.insertAdjacentHTML("beforeend", html);
  }

};

// clear the already existing list
export const clearList = () =>{
    domElement.shopping_list.innerHTML = "";
}