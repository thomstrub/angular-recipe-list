import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LayoutComponent } from './components/layout/layout.component';
import { RecipeDetailComponent } from './components/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from './components/recipeItem/recipeItem.component';
import { RecipeListComponent } from './components/recipeList/recipeList.component';
import { ShoppingListComponent } from './components/shoppingList/shoppingList.component';
import { ShoppingListEditComponent } from './components/shopping-list-edit/shopping-list-edit.component';

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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
