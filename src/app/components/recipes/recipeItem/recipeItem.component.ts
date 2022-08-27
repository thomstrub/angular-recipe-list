import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-recipeItem',
    templateUrl: './recipeItem.component.html'
})

export class RecipeItemComponent {
    @Input() recipe: {name: string, description: string, imagePath: string};
}