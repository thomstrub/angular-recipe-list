import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { RecipeDetailComponent } from './components/recipeDetail/recipeDetail.component';
import { RecipeItemComponent } from './components/recipeItem/recipeItem.component';
import { RecipeListComponent } from './components/recipeList/recipeList.component';
import { RootComponent } from './components/root/root.component';
import { ShoppingListComponent } from './components/shoppingList/shoppingList.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    HeaderComponent,
    ShoppingListComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
