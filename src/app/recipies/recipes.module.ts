 
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
 
import { RouterModule } from '@angular/router';
import { SharedModule } from 'e2e/shared.module';
import { RecEditingComponent } from './rec-editing/rec-editing.component';
import { RecStartComponent } from './rec-start/rec-start.component';
import { RecipeRoutingModule } from './RecipeRouting.module';
import { RecipiesDetailComponent } from './recipies-detail/recipies-detail.component';
import { RecipiesItemComponent } from './recipies-list/recipies-item/recipies-item.component';
import { RecipiesListComponent } from './recipies-list/recipies-list.component';
import { RecipiesComponent } from './recipies.component';

@NgModule({
declarations:  [
    RecipiesComponent,
    RecipiesDetailComponent,
    RecipiesListComponent,
    RecStartComponent,
    RecEditingComponent,
    RecipiesItemComponent,
] , 
imports :[
     RouterModule,
     SharedModule ,
    ReactiveFormsModule,
    RecipeRoutingModule
]

})
export class RecipesModule{
    constructor (){  }
}