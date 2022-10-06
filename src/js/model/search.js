require("@babel/polyfill");
import axios from "axios";

export default class Search{
    constructor(qeury){
        this.qeury = qeury;
    }
    async do_Search (){
        try{
            let result = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.qeury}`);
            // console.log(result);
            this.ress = result.data.recipes;
        // let recipes = ress.data;
        // let data = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${recipes[2].recipe_id}`);
        // console.log(this.ress);
            return this.ress;

        }catch(error){
            console.log(`this is : ${error}`);
        }   
    }
}