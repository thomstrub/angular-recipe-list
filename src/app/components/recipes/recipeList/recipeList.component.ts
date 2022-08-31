import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipeList',
    templateUrl: './recipeList.component.html'
})

export class RecipeListComponent {
    
    recipes: Recipe[] = [
        new Recipe('Fracescina', 'ganrly sandwich', 'https://i0.wp.com/portuguesefood.pt/wp-content/uploads/2018/08/francesinha-porto-3.jpg?fit=740%2C493'),
        new Recipe('Bacalao', 'dry fish', 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2008/10/10/1/EM1013_Salt-Cod-and-Potatoes.jpg.rend.hgtvcom.616.462.suffix/1483736852315.jpeg'),
        new Recipe('Pastel de Nata', 'Custard Pie.', 'https://images.myguide-cdn.com/content/1/large/portuguese-food-424990.jpg')
    ];

    @Output() selectedRecipe = new EventEmitter<Recipe>();

    handleSelectedRecipe(selectedRecipe:Recipe){
        console.log("recipe select!")
        this.selectedRecipe.emit(selectedRecipe);
    }
}