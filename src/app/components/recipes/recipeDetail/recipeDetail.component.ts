import { Component, Input } from "@angular/core";
import { Recipe } from "../recipe.model";
@Component({
    selector: 'app-recipeDetail',
    templateUrl: './recipeDetail.component.html'
})

export class RecipeDetailComponent {
    @Input('recipeItem') recipe: Recipe;

    
}