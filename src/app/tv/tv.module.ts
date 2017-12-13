import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { HttpClientModule} from '@angular/common/http';
import { PosterComponent } from './poster/poster.component';
import {BookmarksModule} from '../bookmarks/bookmarks.module';
import {BookmarksService} from '../bookmarks/bookmarks.service';
import {FormsModule} from '@angular/forms';
import { TvmazeService } from './tvmaze.service';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    BookmarksModule,
    FormsModule
  ],
  declarations: [SearchComponent, PosterComponent],
  providers: [BookmarksService, TvmazeService]
})
export class TvModule { }
