import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule,  }   from '@angular/common/http';
 import { AppComponent } from './app.component';
 import {headerComponent } from './header/header.component';
 
import { SharedModule } from 'e2e/shared.module';
import { CoreModule } from './core.module';
import { RecipesModule } from './recipies/recipes.module';
import { shoppingListModule } from './shopping-list/shopping-list.module';
import { AuthModule } from './auth/auth.module';
 
 
 

@NgModule({
  declarations: [
    AppComponent,
     headerComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    shoppingListModule,
    RecipesModule,
    AuthModule,
    SharedModule,
    CoreModule,
    
  
  ],
  providers:   [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (){   }
 }
