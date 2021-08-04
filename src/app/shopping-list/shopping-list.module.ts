 
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'e2e/shared.module';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListComponent } from './shopping-list.component';


@NgModule({
    declarations:  [
        ShoppingListComponent,
        ShoppingEditComponent,
    ] , 
    imports :[
        
        FormsModule,
         RouterModule.forChild(
             [{path : 'shoppingList',component : ShoppingListComponent},]
         ),SharedModule
    ]
    
    })
 export class shoppingListModule {
    constructor (){  }
 }