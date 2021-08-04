import { Component } from '@angular/core';
 

@Component(
    {
       selector: 'loadingSpinner',
       template: `<h1>Loading...</h1>`,
       styles:[`h1{
        ustify-content:center ;
        margin-top: 30%; 
        margin-left: 30%;
         margin-right: 25%;
    color: #4e38dd ;
  
       }
       @media(max-width:500px){
         h1{
             margin :40% 5% 50% 25%;
            
         }
     }`]
 
    }
)

export class loadingSinnerComponent{}