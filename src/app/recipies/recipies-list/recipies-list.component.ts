import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { recieService } from '../recie.service';
import {recipie} from '../recipie.model'
 
@Component({
  selector: 'app-recipies-list',
  templateUrl: './recipies-list.component.html',
  styleUrls: ['./recipies-list.component.css'],
   
 
})
export class RecipiesListComponent implements OnInit,OnDestroy  {
 
recipies:recipie[] ;
subscription :Subscription;
  constructor(private reciService :recieService,
    private router:Router,
    private route :ActivatedRoute) { }

  ngOnInit()  {
  this.subscription =  this.reciService.recieChanged
    .subscribe(
      (recipes :recipie[])=>{
        this.recipies =recipes
        
      })
     this.recipies = this.reciService.getRecipe();
  }
   
  newRecipie(){
    this.router.navigate(['new'],{relativeTo :this.route})

   }

   



 ngOnDestroy() { 
   this.subscription.unsubscribe()
 }

}
