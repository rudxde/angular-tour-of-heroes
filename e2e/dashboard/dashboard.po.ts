import { browser, element, by } from 'protractor';

export class DashboardPage {
    navigateTo = () => browser.get('/dashboard');
    element = () => element(by.css('my-dashboard'));
    getTitle = () => this.element().element(by.css('h3'));
    getTopHeroGrid = () => this.element().element(by.css('.grid.grid-pad'));
    getTopHeroGridModules = () => this.getTopHeroGrid().all(by.css('.hero'));
    getHeroSearch = () => this.element().element(by.css('my-hero-search'));
    getHeroSearchTextBox = () => this.getHeroSearch().element(by.css('input'));
    getHeroSearchResults = () => this.getHeroSearch().all(by.css('.search-result'));
}
