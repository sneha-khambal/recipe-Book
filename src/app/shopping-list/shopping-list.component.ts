import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { recipie } from '../recipies/recipie.model';

import {ingredient} from '../shared/ingradient.model'
import { shoppingListService } from './shopping-list.service';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
 
})
export class ShoppingListComponent implements OnInit ,OnDestroy {
   Ingreadient :ingredient[] ;
   recipies:recipie[];
    ingredientchnged :Subscription;
  constructor(private shoppinglistService :shoppingListService ) { }

  ngOnInit()  {
     this.Ingreadient =this.shoppinglistService.getIngredient();
    this.ingredientchnged= this.shoppinglistService.ingreadientChaned.subscribe(
       (ingreadient :ingredient[])=>{
         this.Ingreadient = ingreadient;
       }
     )
  }

  onEditItem(index:number){
    this.shoppinglistService.startEditing.next(index);
   }

  ngOnDestroy() {
    this.ingredientchnged.unsubscribe() ;
   }
  



  

}
