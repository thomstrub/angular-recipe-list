import { Component } from "@angular/core";
import { Recipe } from "../recipe.model";

@Component({
    selector: 'app-recipeList',
    templateUrl: './recipeList.component.html'
})

export class RecipeListComponent {
    recipes: Recipe[] = [
        new Recipe('Fracescina', 'ganrly sandwich', 'https://i0.wp.com/portuguesefood.pt/wp-content/uploads/2018/08/francesinha-porto-3.jpg?fit=740%2C493'),
        new Recipe('Fracescina', 'ganrly sandwich', 'https://i0.wp.com/portuguesefood.pt/wp-content/uploads/2018/08/francesinha-porto-3.jpg?fit=740%2C493'),
        new Recipe('Fracescina', 'ganrly sandwich', 'https://i0.wp.com/portuguesefood.pt/wp-content/uploads/2018/08/francesinha-porto-3.jpg?fit=740%2C493')
    ];
}