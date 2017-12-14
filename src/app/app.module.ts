import {BrowserModule, Title} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { Page404Component } from './page404/page404.component';
import { SiteLayoutComponent } from './layout/site-layout/site-layout.component';
import { ContactComponent } from './contact/contact.component';
import {TvModule} from './tv/tv.module';
import { EpisodisePipe } from './tv/episodise.pipe';
import {LoggedInGuard} from './logged-in.guard';
import { RoutingInProgressComponent } from './routing-in-progress/routing-in-progress.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Page404Component,
    SiteLayoutComponent,
    ContactComponent,
    RoutingInProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TvModule
  ],
  providers: [Title, LoggedInGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
