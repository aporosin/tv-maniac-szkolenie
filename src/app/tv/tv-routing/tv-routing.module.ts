import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {ShowDetailsResolver} from '../show-details/show-details-resolver';
import {ShowDetailsComponent} from '../show-details/show-details.component';
import {SiteLayoutComponent} from '../../layout/site-layout/site-layout.component';
import {SearchComponent} from '../search/search.component';
import {HomeComponent} from '../../home/home.component';
import {ContactComponent} from '../../contact/contact.component';
import {Page404Component} from '../../page404/page404.component';
import {LoggedInGuard} from '../../logged-in.guard';
import {SiteMenuModule} from '../../site-layout/site-menu/site-menu.module';

const routes: Routes = [
  { path: 'tv',
    component: SiteLayoutComponent,
    //canActivate: [LoggedInGuard], // jak zabronic uzytkownikowi wejscia pod wybrany adres -
    children: [
      // solution for slowly loading details: - resolve will
      {path: ':id', component: ShowDetailsComponent, resolve: {show: ShowDetailsResolver}},
      {path: '', component: SearchComponent, data: {title: 'Search FOR TV SHOWS'}}
    ]
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SiteMenuModule.forChild([{path: '/tv', label: "TV Series", exact: true}])
  ],
  declarations: []
})
export class TvRoutingModule { }
