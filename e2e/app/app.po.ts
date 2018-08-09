import { browser, element, by } from 'protractor';

export class BlankPage {
  navigateTo = () => browser.get('/');
  getNavBar = () => element(by.css('nav'));
  getNavBarElements = () => element.all(by.css('nav>*'));
  getTitle = () => element(by.css('h1'));
}
