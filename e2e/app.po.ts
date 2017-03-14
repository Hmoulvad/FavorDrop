import { browser, element, by } from 'protractor';

export class FavorDropPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('fd-root h1')).getText();
  }
}
