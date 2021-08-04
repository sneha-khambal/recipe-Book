 import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { RecEditingComponent } from './rec-editing/rec-editing.component';
import { RecStartComponent } from './rec-start/rec-start.component';
import { ResolverService } from './recipe -resolver.service';
import { RecipiesDetailComponent } from './recipies-detail/recipies-detail.component';
import { RecipiesComponent } from './recipies.component';

const routes :Routes=[

    {path :'recipes' , component : RecipiesComponent,  
    children : [
      {path :'' ,component: RecStartComponent,
      canActivate:[AuthGuard]
    },
      {path :'new' ,component:RecEditingComponent },
      {path :':id' ,component:RecipiesDetailComponent,
    resolve: [ ResolverService] },
       {path :':id/edit' ,component:RecEditingComponent,
       resolve: [ ResolverService] }
    ] },

]
 
@NgModule({
imports:[RouterModule.forChild(routes)],
exports:[RouterModule]
})
export class RecipeRoutingModule{}