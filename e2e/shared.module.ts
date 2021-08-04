  import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { DropDownDirective } from 'src/app/shared/dropDown.directive';
import { loadingSinnerComponent } from 'src/app/shared/loading-spinner/loading-spinner.component';

 @NgModule({
declarations:[
loadingSinnerComponent,
DropDownDirective,
],
imports:[
    CommonModule
],
exports :[
    loadingSinnerComponent,
    DropDownDirective,
    CommonModule]
 })
export class SharedModule{}