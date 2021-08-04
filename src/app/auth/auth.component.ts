import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthReonseData, AuthService } from './auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
isLogin= true;
isLoding =false;
error:string=null;
  constructor(private authService :AuthService,private router :Router ) { }

  ngOnInit(): void {
  }
  switchMode(){
  this.isLogin= !this.isLogin;
}
onSubmit(form:NgForm){ 
  if(!form.valid){
    return;
  }
  const email=form.value.email;
  const password = form.value.password;
  let authObs :Observable<AuthReonseData>;

this.isLoding=true;
 if(this.isLogin){
    this.authService.login(email,password).subscribe(reData=>{
      console.log(reData);
      this.isLoding=false;
      this.router.navigate(['/recipes']);
    },
     errorMessage=>{
      console.log(errorMessage);
  this.error=errorMessage;
   this.isLoding=false;
    })
   
 }else{
  this.authService.signUp(email,password).subscribe(resData=>{
    console.log(resData);
    this.isLoding=false;
    this.router.navigate(['/recipes']);
  },
   errorMessage=>{
    console.log(errorMessage);
this.error=errorMessage;
 this.isLoding=false;
  })
 
 }

  form.reset;
}
}
