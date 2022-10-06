require("@babel/polyfill");
import Search from "./model/search";
import {domElement} from "./base_DOM";
import * as searchView from "./view/viewSearch";

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
    if(inpt){
    // checking the input empty or NOT condtion
    // empty state obj dotor "srch" gedeg obj uusgeed ter ni dotor constructor function aa hiine
        state.srch = new Search(inpt);
    // 3.to prepare UI
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
        

    }else{alert("***search input is empty***")} 

};

// // to get submit event listener
domElement.submit_search.addEventListener("submit", e => {
    e.preventDefault(); // this is prevent the broswer do automatic refreshing
    process_searching();

});

console.log(state);