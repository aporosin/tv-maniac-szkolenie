import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Page404Component} from './page404/page404.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './tv/search/search.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details-resolver';

const routes: Routes = [
  {path: '', component: SiteLayoutComponent,
  children: [
    { path: '', component: HomeComponent, pathMatch: 'full',
      data: { title: '123 Welcome to TV Maniac!'}},
    {path: 'contact', component: ContactComponent, data: {title: 'Contact with us!'}},
    // solution for slowly loading details: - resolve will
    {path: 'tv/:id', component: ShowDetailsComponent, resolve: {show: ShowDetailsResolver}},
    {path: 'tv', component: SearchComponent, data: {title: 'Search FOR TV SHOWS'}}
  ]
  },
  {path: '**', component: Page404Component, data: { title: '123 Page not found!'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
