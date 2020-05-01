import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  //temporary homepage while testing pages
  {
    // Page is a "lazy-loaded" module, so this is how it must be loaded to avoid duplication of child routes
    path: 'page',
    loadChildren: () => import('./page/page.module').then(m => m.PageModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
