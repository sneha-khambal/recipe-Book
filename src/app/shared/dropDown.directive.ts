import { Directive,HostListener,HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]',
  
})
export class DropDownDirective {
   @HostBinding('class.show') isOpen = false;
    @HostListener('click')  toggleopen(){
this.isOpen = !this.isOpen; 
    }

}