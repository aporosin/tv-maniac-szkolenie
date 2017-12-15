import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TvmazeService } from './tvmaze.service';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {RouterModule} from '@angular/router';
import { EpisodisePipe } from './episodise.pipe';
import {ShowDetailsResolver} from './show-details/show-details-resolver';
import { RatingInputComponent } from './rating-input/rating-input.component';
import { TvRoutingModule } from './tv-routing/tv-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BookmarksModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    TvRoutingModule
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent, EpisodisePipe, RatingInputComponent],
  providers: [BookmarksService, TvmazeService, ShowDetailsResolver],
  exports: [EpisodisePipe]
})
export class TvModule { }
