import { ingredient } from '../shared/ingradient.model';

export class recipie {
 public name : string;
 public description :string;
 public  imagePath : string;
 public Ingreadient :ingredient[];

 constructor(name:string, desc:string,imagePath:string,Ingreadient :ingredient[]){
     this.name=name,
     this.description=desc,
     this.imagePath=imagePath,
     this.Ingreadient = Ingreadient

 }

}