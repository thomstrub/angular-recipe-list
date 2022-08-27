import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-recipeItem',
    templateUrl: './recipeItem.component.html'
})

export class RecipeItemComponent {
    // Angular keeps classes comparmentalized- you have to make something available with a decorator
    // you can pass an alias in using the brackets- using an alias here of recipeItem - recipeList will now need to bind to this alias
    @Input('recipeItem') recipe: {name: string, description: string, imagePath: string};
}