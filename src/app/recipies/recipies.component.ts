import { Component, OnInit,Input} from '@angular/core';
import { recipie } from './recipie.model';
 
 

@Component({
  selector: 'app-recipies',
  templateUrl: './recipies.component.html',
  styleUrls: ['./recipies.component.css'],
  
})
export class RecipiesComponent implements OnInit {
  selectRecipe:  recipie
  constructor( ) { }

  ngOnInit(){
    
  }
  
  

}
