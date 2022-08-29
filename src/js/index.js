require("@babel/polyfill");
import Search from "./model/search";

let sr = new Search("pizza");

sr.do_Search().then(err => console.log(err));