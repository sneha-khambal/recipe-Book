 
import { Subject } from 'rxjs';
import { ingredient } from '../shared/ingradient.model';
 

export class shoppingListService{
     ingreadientChaned = new Subject<ingredient[]>(); 
     startEditing =new Subject<number>() ; 
    private  Ingreadient :ingredient[]=[]

    getIngredient(){
        return this.Ingreadient.slice()
    }
   getIngredients(index:number){
       return this.Ingreadient[index];
   }

   


    onIngedientAdded(Ingradient : ingredient )
    {
        this.Ingreadient.push( Ingradient ) 
       this.ingreadientChaned.next(this.Ingreadient.slice())

    }
    
    addIngreadient(ingredient:ingredient[]){
        this.Ingreadient.push(...ingredient);
        this.ingreadientChaned.next(this.Ingreadient.slice())
    }

    updateIngredient(index :number ,newIngredient:ingredient){
        this.Ingreadient[index]=newIngredient;
        this.ingreadientChaned.next(this.Ingreadient.slice())
     }

     deleteIngredient(index :number){
         this.Ingreadient.splice(index,1);
         this.ingreadientChaned.next(this.Ingreadient.slice())
     }

}