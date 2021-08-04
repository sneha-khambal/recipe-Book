import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ingredient } from 'src/app/shared/ingradient.model';
import { recieService } from '../recie.service';
import { recipie } from '../recipie.model';
import { DataStorageService } from 'src/app/shared/data-storage.service';
 
@Component({
  selector: 'app-recipies-detail',
  templateUrl: './recipies-detail.component.html',
  styleUrls: ['./recipies-detail.component.css']
})
export class RecipiesDetailComponent implements OnInit {
 @Input() recpee :recipie;
 id : number;
 ingredients :ingredient[];
  constructor  ( private dataStorageService:DataStorageService,private recipeService :recieService,
    private route : ActivatedRoute,
    private router :Router ) { }

  ngOnInit() {
    this.route.params.subscribe((params :Params)=>{
      this.id = +params['id'];
     this.recpee = this.recipeService.getIndex(this.id)
     
            })
  }
  onAddToShoppingList( ){
    this.recipeService.addIngreadientsoShoppingList(this.recpee.Ingreadient)
   }

  editing(){
this.router.navigate(['edit'] ,{relativeTo :this.route})
  }
  onDelete(){
    this.recipeService.deleteRecipe(this.id)
    this.router.navigate( ['/recipes'])
  }

   
 
}
