import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    browser.waitForAngularEnabled(false);
    return element(by.css('tv-root h1')).getText();
  }
}
