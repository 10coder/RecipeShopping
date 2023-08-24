import { NgModule } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Header } from './header/header.component';
import { RecipiesComponent } from './header/recipies/recipies.component';
import { ShoppingComponent } from './header/shopping/shopping.component';
import { RecipeListComponent } from './header/recipies/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './header/recipies/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './header/recipies/recipe-detail/recipe-detail.component';
import { ShoppingListComponent } from './header/shopping/shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './header/shopping/shopping-edit/shopping-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    RecipiesComponent,
    ShoppingComponent,
    RecipeListComponent,
    RecipeItemComponent,
    RecipeDetailComponent,
    ShoppingListComponent,
    ShoppingEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
