import { Component, Input, OnInit  } from '@angular/core';
import { recieService } from '../../recie.service';
import { recipie } from '../../recipie.model';
 
@Component({
  selector: 'app-recipies-item',
  templateUrl: './recipies-item.component.html',
  styleUrls: ['./recipies-item.component.css']
})
export class RecipiesItemComponent implements OnInit {
 @Input()  recipe:recipie;
  @Input()  index:number;
  constructor(private recieService : recieService) { }

  ngOnInit(): void {}
  
  

}