import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiComponent } from './pages/audi/audi.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { HomeComponent } from './component/home/home.component';
import { Page404Component } from './pages/page404/page404.component';

const routes: Routes = [

{path:'',
  redirectTo:'/home',
  pathMatch:'full'
},

{
  path:'home',
  component: HomeComponent,
  title: 'Home'
},

{path:'audi',
  component:AudiComponent,
},

{path:'fiat',
  component:FiatComponent,
},

{path:'ford',
  component:FordComponent,
},
{
path:'**',
component: Page404Component,

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
