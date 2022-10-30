require("@babel/polyfill");
import Search from "./model/search";
import {domElement} from "./base_DOM";
import * as searchView from "./view/viewSearch";
import { parseInt } from "lodash";

// let sr = new Search("pizza");
// sr.do_Search().then(err => console.log(err));

                                                    /*mostly keep datas here*/
// container
const state = {};
// // do search function
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
        const page_Data_Saver = parseInt(btn.dataset.goto,10);
            console.log(typeof page_Data_Saver);

        // clear the first page result && clear the clicked button too
        searchView.clearResult();
        // to call the render function and pass recipies and pageData
        searchView.render_Recipies(state.srch.ress, page_Data_Saver);
       

    }
})