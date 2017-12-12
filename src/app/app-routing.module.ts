import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Page404Component} from './page404/page404.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';

const routes: Routes = [
  {path: '', component: SiteLayoutComponent,
  children: [
    { path: '', component: HomeComponent, pathMatch: 'full'}
  ]},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
