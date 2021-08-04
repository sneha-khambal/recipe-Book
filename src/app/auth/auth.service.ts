import { HttpClient, HttpErrorResponse } from '@angular/common/http';
 
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from './user.model';
 import {  environment } from '../../environments/environment';

export interface AuthReonseData{
    idToken:string;
    email:string;
refreshToken:string ;
expiresIn:string;	 
localId:string;
resistered?: boolean
}



@Injectable(
    {providedIn :'root'}
)
export class AuthService {
    constructor(private http :HttpClient,private router :Router){}
    user = new BehaviorSubject<User>(null);
    token:string=null;
    tokenTimer:any;

    signUp(email:string,password:string){
      return   this.http.post<AuthReonseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+environment.firebaseKey,
        {email:email,
        password:password,
        returnSecureToken:true
    }
    ).pipe(catchError(this.errorHandler ),tap(resData=>{
        const expirationDate =new Date(new Date().getTime() + +resData.expiresIn *1000)
                    const user = new User(resData.email,resData.localId,resData.idToken,expirationDate);
                    this.user.next(user);
        
                }));
    }
    login(email:string,password:string){
       return this.http.post<AuthReonseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+environment.firebaseKey,
        {email:email,
            password:password,
        returnSecureToken:true
        }).pipe(catchError(this.errorHandler ),tap(
            resData=>{this.handleAuthentication(resData.email,resData.localId,resData.idToken, +resData.expiresIn,)}
        ))
    };
    autoLogin(){
       const userdata:{
           email:string;
           id:string;
           _token:string;
           _tokenExpirationDate:string;
       }=JSON.parse(localStorage.getItem('userData')) ;
        if(! userdata){
            return ;
        }
        let loadUser =new User(userdata.email,userdata.id,userdata._token,new Date(userdata._tokenExpirationDate));
        if(loadUser.token){
            this.user.next(loadUser);
            const tokenExpirationDuration =new Date(userdata._tokenExpirationDate).getTime()- new Date().getTime();
            this.autoLogut(tokenExpirationDuration)
        }
    };

    logOut(){
        this.user.next(null);
this.router.navigate(['auth']);
localStorage.removeItem('userdata');
if(this.tokenTimer){
clearTimeout(this.tokenTimer)
}
this.tokenTimer=null
};

autoLogut(expirationDuration :number){
    this.tokenTimer= setTimeout(()=>{
this.logOut();
    },expirationDuration)

}


    private handleAuthentication(email:string,userId:string,  token :string,expiresIn:number){
        const expirationDate =new Date(new Date().getTime() + expiresIn *1000)
                    const user = new User( email,userId,token,expirationDate);
                    this.user.next(user);
                    this.autoLogut(expiresIn*1000)
                    localStorage.setItem('userData', JSON.stringify(user))
        
                };
                private errorHandler(errorRes:HttpErrorResponse){
                    let errorMessage= 'An unknown error occured!'
                    if(!errorRes.error || !errorRes.error.error ){
                        return  throwError(errorMessage);
                    } 
                        switch(errorRes.error.error.message ){
                            case 'EMAIL EXISTS':
                             errorMessage='  This email exists already';
                             break;
                             case 'EMAIL_NOT_FOUND':
                                errorMessage='This email does not exist.';
                                break;
                                case 'INVALID_PASSWORD':
                                    errorMessage=' Password is inncorrect';
                                    break;
                            
                          
                    }
                    return throwError(errorMessage )
                }
   
    }
    
         