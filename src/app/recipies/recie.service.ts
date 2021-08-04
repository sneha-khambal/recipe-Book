import {   Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingradient.model';
import { recipie } from './recipie.model';
import { shoppingListService } from '../shopping-list/shopping-list.service';

 
@Injectable(
  
)
export class recieService{
   recieChanged =new Subject<recipie[]>();
    private recipies:recipie[] =[];
 /* [
      ,
        new recipie('A test1 Recipie','A testing recipie',' link ',[
          new ingredient('chillies',4)
        ]),
        new recipie('A test4 Recipie','A testing recipie',' link ',[
          new ingredient('cake',2)
        ]),
        new recipie('A test5 Recipie','A testing recipie',' link ',[
          new ingredient('potoato',3)
        ])
      ];
*/
      constructor(private slService :shoppingListService){}

      setRecipe(recipes :recipie[]){
        this.recipies = recipes;
        this.recieChanged.next(this.recipies.slice())
        
      }
      
  getRecipe(){
return this.recipies.slice();

  }
  getIndex(index:number){
  return  this.recipies[index]
  }

 
 
  addRecipe(recipe :recipie){
    this.recipies.push(recipe);
    this.recieChanged.next(this.recipies.slice());
  };

  updateRecipe(index :number,newRecipe: recipie){
    this.recipies[index] =newRecipe;
    this.recieChanged.next(this.recipies.slice());
  };

  addIngreadientsoShoppingList( ingredient: ingredient[]){
    this.slService.addIngreadient(ingredient)
  }
  deleteRecipe(index :number){
    this.recipies.splice(index,1)
this.recieChanged.next(this.recipies.slice())
  }
}