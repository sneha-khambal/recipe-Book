import { Component, OnInit ,ViewChild,ElementRef, Output, EventEmitter, OnDestroy} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { shoppingListService } from '../shopping-list.service';
import { ingredient } from 'src/app/shared/ingradient.model';
 

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit,OnDestroy {
  @ViewChild('f')slForm:NgForm;
 subscription :Subscription;
 
  constructor(private shoppinglistService :shoppingListService) { }
editMode=false;
editedItemIndex :number;
editIngredient :ingredient;
  ngOnInit()  {
   this.subscription= this.shoppinglistService.startEditing
    .subscribe((index:number)=>{ 
      this.editedItemIndex =index;
      this.editMode=true;
      this.editIngredient =this.shoppinglistService.getIngredients(index);
      this.slForm.setValue({
         name:this.editIngredient.name,
         amount :this.editIngredient.amount
      }
      )
    })
  }

  onSubmit(form :NgForm){
  const value =form.value
  const newIngredient = new ingredient(value.name,value.amount);
  if(this.editMode){ 
    this.shoppinglistService.updateIngredient(this.editedItemIndex,newIngredient)
  }
  else{this.shoppinglistService.onIngedientAdded(newIngredient)
  }
  this.editMode=false;
  this.slForm.reset();
  }

  onClear(){
    this.slForm.reset();
    this.editMode=false;

  }
  onDelete(){
   this.shoppinglistService.deleteIngredient(this.editedItemIndex)
     this.onClear();
   }
ngOnDestroy(){ 
  this.subscription.unsubscribe()
}

}
