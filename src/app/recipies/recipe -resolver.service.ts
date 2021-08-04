import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

import { DataStorageService } from '../shared/data-storage.service';
import { recieService } from './recie.service';
import { recipie } from './recipie.model';
import { Observable } from 'rxjs';

@Injectable(
{providedIn :'root'}
)
 export class ResolverService  implements Resolve<recipie[]>{
    constructor( private dataStorageService :DataStorageService,private recipeService:recieService){}
    
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
      ): Observable<any>|Promise<any>|any{
    
const recipes =this.recipeService.getRecipe();
if(recipes.length == 0){
    return this.dataStorageService.fetchRecipes()
}else{
    return recipes;
}
   
    }

 }