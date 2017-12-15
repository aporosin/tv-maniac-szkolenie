import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {SiteMenuService} from '../site-menu.service';
import {SiteMenuServiceCOnfig} from '../site-menu.models';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [SiteMenuService]
})
export class SiteMenuModule {
  static forChild(config: SiteMenuServiceCOnfig): ModuleWithProviders {
    SiteMenuService.registerItems(config);

    return {
      ngModule: SiteMenuModule,
      providers: [
        {
          provide: SiteMenuService,
          useValue: config
        }
      ]
    }
  }
}
