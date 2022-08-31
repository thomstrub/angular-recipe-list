import { Component } from "@angular/core";
import { Ingredient } from "src/app/shared/ingredient.model";

@Component({
    selector: 'app-shoppingList',
    templateUrl: './shoppingList.component.html'
})

export class ShoppingListComponent {
    ingredients: Ingredient[] = [
        new Ingredient('Apples', 5),
        new Ingredient('Tomatoes', 10)
    ];
    onInputSubmit(formData: Ingredient){
        console.log(formData, " <--- formData");
        this.ingredients.push(formData);
    }
}