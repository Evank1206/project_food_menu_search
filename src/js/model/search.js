require("@babel/polyfill");
import axios from "axios";


export default class Search{
    constructor(qeury){
        this.qeury = qeury;
    }
    async do_Search (){
        try{
            let ress = await axios(`https://forkify-api.herokuapp.com/api/search?q=${this.qeury}`);
            this.ress = ress.data;
        // let recipes = ress.data;
        // let data = await axios(`https://forkify-api.herokuapp.com/api/get?rId=${recipes[2].recipe_id}`);
        // console.log(data)
            return ress.data.recipes;

        }catch(error){
            console.log(`this is : ${error}`);
        }
        
    }

} 


