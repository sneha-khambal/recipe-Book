import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
import { recieService } from '../recipies/recie.service';
import { recipie } from '../recipies/recipie.model';
import{exhaustMap, map,take,tap} from 'rxjs/operators' 
import { AuthService } from '../auth/auth.service';

@Injectable(
    {providedIn:'root'}
)
export class  DataStorageService{


    constructor(private http :HttpClient,private recipeService :recieService, private authService:AuthService){}

storeRecipes(){
    const recipes =this.recipeService.getRecipe();
    this.http.put('https://ng-course-recipe-book-acd67-default-rtdb.firebaseio.com/recipes.json',recipes)
    .subscribe((response)=>{
        console.log(response)
    });
}

fetchRecipes(){
  
    return this.http.get<recipie[]>('https://ng-course-recipe-book-acd67-default-rtdb.firebaseio.com/recipes.json'
  )
 .pipe(
    map(recpes=>{
        return recpes.map(recipe=>
            {return {...recipe,Ingreadient:recipe.Ingreadient ? recipe.Ingreadient:[]
             }
            })
         }),tap(recpes=>{
            this.recipeService.setRecipe(recpes);
         })
  )
  .subscribe(
     result=>{
       this.recipeService.setRecipe( result)
      }
  
    
    
    
    
 
      
   ) }


}