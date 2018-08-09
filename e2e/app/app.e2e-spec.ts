import { BlankPage } from './app.po';
import { browser } from '../../node_modules/protractor';

describe('blank App', () => {
    let page: BlankPage;

    beforeEach(() => {
        page = new BlankPage();
        page.navigateTo();
    });

    it('should display Title', async () => {
        expect(await page.getTitle().getText()).toBeTruthy();
    });

    it('navbar should habe more than 1 item', () => {
        expect(page.getNavBarElements().count()).toBeGreaterThan(1);
    });

    it('first navbar Link should be open', async () => {
        const link = await page.getNavBarElements().first().getAttribute('routerLink');
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + link);
    });

});
