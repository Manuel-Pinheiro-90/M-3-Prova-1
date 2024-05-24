import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AudiComponent } from './pages/audi/audi.component';
import { FiatComponent } from './pages/fiat/fiat.component';
import { FordComponent } from './pages/ford/ford.component';
import { HomeComponent } from './component/home/home.component';

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



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
