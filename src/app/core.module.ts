  import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from "@angular/core";
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { recieService } from './recipies/recie.service';
import { ResolverService } from './recipies/recipe -resolver.service';
import { shoppingListService } from './shopping-list/shopping-list.service';

@NgModule ({
 providers :[shoppingListService,
    recieService, 
    ResolverService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptorService,multi:true}]
}) 
export class CoreModule {}