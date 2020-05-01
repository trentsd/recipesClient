import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageComponent } from './page.component';

//These routes are shown as starting at '' because they are child routes of the routes loaded in the root app-routing.module
//These routes are currently starting at /page/
const routes: Routes = [
  {
    path: '',
    redirectTo: '0'
  },
  {
    path: ':id',
    component: PageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
