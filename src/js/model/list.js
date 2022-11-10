import axios from "axios";
export default class ListFun {
    constructor (id){
        this.id = id;
    }
    async listRecipe(){
        const result = await axios("https://forkify-api.herokuapp.com/api/get?rId=" + this.id);
        // console.log(result.data.recipe);
        // this.publisher = result.data.recipe.publisher;
        this.title = result.data.recipe.title;
        // this.inredients = result.data.recipe.ingredients;
        this.image_url = result.data.recipe.image_url;
        // this.source_url = result.data.recipe.source_url;
        // this.social_rank = result.data.recipe.social_rank;
    }
}