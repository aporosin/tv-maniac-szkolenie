import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {Page404Component} from './page404/page404.component';
import {SiteLayoutComponent} from './layout/site-layout/site-layout.component';
import {ContactComponent} from './contact/contact.component';
import {SearchComponent} from './tv/search/search.component';
import {ShowDetailsComponent} from './tv/show-details/show-details.component';
import {ShowDetailsResolver} from './tv/show-details/show-details-resolver';
import {LoggedInGuard} from './logged-in.guard';
import {SiteMenuModule} from './site-layout/site-menu/site-menu.module';

const routes: Routes = [
  { path: '',
    component: SiteLayoutComponent,
    canActivate: [LoggedInGuard], // jak zabronic uzytkownikowi wejscia pod wybrany adres -
    children: [
    { path: '', component: HomeComponent, pathMatch: 'full',
      data: { title: '123 Welcome to TV Maniac!'}},
    {path: 'contact', component: ContactComponent, data: {title: 'Contact with us!'}},
    // solution for slowly loading details: - resolve will
  ]
  },
  {path: '**', component: Page404Component, data: { title: '123 Page not found!'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  SiteMenuModule.forChild([
    {path: '', label: 'Strona główna', exact: true},
    {path: '/contact', label: 'Kontakt', exact: true}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
