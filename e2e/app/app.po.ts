import { browser, element, by } from 'protractor';

export class BlankPage {
  navigateTo() {
    return browser.get('/');
  }

  getNavBar() {
    return element(by.css('nav'));
  }

  getNavBarElements() {
    return element.all(by.css('nav>*'));
  }

  getTitle() {
    return element(by.css('h1'));
  }
}
