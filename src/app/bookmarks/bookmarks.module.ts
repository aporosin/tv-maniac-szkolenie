import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BookmarksService} from './bookmarks.service';
import { BookmarkAddComponent } from '../bookmark-add/bookmark-add.component';
import { BookmarkRemoveComponent } from '../bookmark-remove/bookmark-remove.component';
import { IsBookmarkedDirective } from './is-bookmarked.directive';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient} from '@angular/common/http';
import {HttpLoaderFactory} from '../app.module';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: TranslateHttpLoader,
        deps: [HttpClient]
      }
    })
  ],
  declarations: [BookmarkAddComponent, BookmarkRemoveComponent, IsBookmarkedDirective],
  providers: [BookmarksService],
  exports: [BookmarkAddComponent, BookmarkRemoveComponent, IsBookmarkedDirective]
})

export class BookmarksModule { }
