import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,FormArray, Validators, FormBuilder} from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
 
import { recieService } from '../recie.service';
import { recipie } from '../recipie.model';
 

@Component({
  selector: 'app-rec-editing',
  templateUrl: './rec-editing.component.html',
  styleUrls: ['./rec-editing.component.css']
})
export class RecEditingComponent implements OnInit {
id:number;
editMode=false;
public  recipeForm :FormGroup;
  constructor(private route: ActivatedRoute ,
    private recieService :recieService,
    private router :Router,
    private  fb : FormBuilder
    ) { }

  ngOnInit()  {
    this.route.params
    .subscribe((params:Params)=>{
this.id =+params['id'];
this.editMode = params['id'] != null;
this.initForm();
    })
  }

  onSubmit(){
    const newRecipe = new recipie(
      this.recipeForm.value['name'],
     this.recipeForm.value['description'],
      this.recipeForm.value['imagePath'],
      this.recipeForm.value['ingredients'],

    )
     if(this.editMode){
       this.recieService.updateRecipe(this.id ,newRecipe)
     }
     else
     {this.recieService.addRecipe( newRecipe)};
     this.onCancel()
  }
  onAddIngedient(){
   (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name':new FormControl(null
          ,Validators.required,
          
        ),
        'amount':new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  onCancel(){
this.router.navigate(['../'],{relativeTo:this.route})
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index)

  }

  private initForm(){
let recipeName ='';
let recipeImagePath='';
let recipeDescription='';
let recipeIngredient= this.fb.array([])
if(this.editMode){
  const recipe =this.recieService.getIndex(this.id);
 recipeName =recipe.name;
  recipeImagePath=recipe.imagePath;
  recipeDescription=recipe.description;
  if(recipe['Ingreadient']){
    for(let singleIngredient of recipe.Ingreadient ){
      recipeIngredient.push(
          this.fb.group
         ({
          'name': new FormControl(singleIngredient.name,Validators.required),
          'amount' :new FormControl (singleIngredient.amount,[
            ,Validators.required,
            Validators.pattern(/^[1-9]+[0-9]*$/)
          ])
        })
      )
    }
  }
 
}

    this.recipeForm = this.fb.group({
      'name':new FormControl(recipeName ,Validators.required),
      'imagePath':new FormControl(recipeImagePath,Validators.required),
      'description':new FormControl(recipeDescription,Validators.required),
      'ingredients': recipeIngredient 

    })
  }

}
