require("@babel/polyfill");
import Search from "./model/search";
import {domElement} from "./model/base_DOM";
import * as searchView from "./view/viewSearch";
import { parseInt } from "lodash";
import Recipies from "./model/recipies";
import {clearRecip, displayRecip} from "./view/recipiesView";

// let sr = new Search("pizza");
// sr.do_Search().then(err => console.log(err));

                                                    /*mostly keep datas here*/
// container
const state = {};
// // do search function 1. CONTROLLER
const process_searching = async () =>{
    // 1.to get user input from user
    // let inpt = "steak";
    let inpt = searchView.getInput();
    // 2.to create search object 
    // if to submit the search input empty, It will give alert messege
    if(inpt){
    // checking the input empty or NOT condtion
    // empty state obj dotor "srch" gedeg obj uusgeed ter ni dotor constructor function aa hiine
        state.srch = new Search(inpt);
    // 3.to prepare UI
        searchView.clearInput(); // clear the input 
        searchView.clearResult(); // clear the searched result from display
    // 4.to complete search 
        await state.srch.do_Search();
    // 5.to show on the DOM
    // if user typed not proper word to search, result displays alert text
        // console.log(state.srch.ress)
        if(state.srch.ress !== undefined){
            searchView.render_Recipies(state.srch.ress);
        }else{
            alert("The Search NOT FOUND any result!");
        }
        

    }else{
        alert("***search input is empty***");
    } 

};

// // to get submit event listener
domElement.submit_search.addEventListener("submit", e => {
    e.preventDefault(); // this is prevent the broswer do automatic refreshing
    process_searching();

});
// console.log(state);

// to eventListerner for created button 
domElement.showBtn.addEventListener("click", e =>{
    // to catch clicked location using js closest() function
    let btn = e.target.closest(".btn-inline");
        // console.log(btn);
    if(btn){
        // to using dataset js atterbute and gete goto from html
        const page_Data_Saver = parseInt(btn.dataset.goto, 10);
            // console.log(typeof page_Data_Saver);

        // clear the first page result && clear the clicked button too
        searchView.clearResult();
        // to call the render function and pass recipies and pageData
        searchView.render_Recipies(state.srch.ress, page_Data_Saver);
    }
});

// Display Recipies CONTROLLER 2
const process_recipies = async ()=>{
    // 1. to get location of hash (ID);
    // every url has window.location.hash, SO using it for get unique hash (id) of item
    let id = window.location.hash.replace("#", "");
    // 2. to get pass (ID) to new constructor function;
    state.indivitual_result = new Recipies(id);
    // 3. to prepare UI (clear recipies)

    // 4. to get data recipies
    await state.indivitual_result.getRecipe();
    // 5. to display

    // console.log(state.indivitual_result.title);
    clearRecip();
    displayRecip(state.indivitual_result)

}
// using hashchange for getting clicked event lister
window.addEventListener("hashchange", process_recipies);
// when refresh the page, result won't disappear using "load"
window.addEventListener("load", process_recipies);


// SHOWING RECIPIES PART



