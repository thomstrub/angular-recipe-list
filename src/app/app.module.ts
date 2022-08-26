import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RecipeDetailComponent } from './components/recipes/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from './components/recipes/recipeItem/recipeItem.component';
import { RecipeListComponent } from './components/recipes/recipeList/recipeList.component';
import { ShoppingListComponent } from './components/shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './components/shoppingList/shopping-list-edit/shopping-list-edit.component';
import { RecipesComponent } from './components/recipes/recipes.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListEditComponent,
    RecipesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
