import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {FormsModule} from '@angular/forms';
import { TvmazeService } from './tvmaze.service';
import { ShowDetailsComponent } from './show-details/show-details.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BookmarksModule,
    FormsModule,
    RouterModule
  ],
  declarations: [SearchComponent, PosterComponent, ShowDetailsComponent],
  providers: [BookmarksService, TvmazeService]
})
export class TvModule { }
