import { BlankPage } from './app.po';
import { browser } from '../../node_modules/protractor';

describe('blank App', () => {
    let page: BlankPage;

    beforeEach(async () => {
        page = new BlankPage();
        await page.navigateTo();
    });

    it('should display Title', async () => {
        await expect(await page.getTitle().getText()).toBeTruthy();
    });

    it('navbar should have more than 1 item', async () => {
        await expect(page.getNavBarElements().count()).toBeGreaterThan(1);
    });

    it('first navbar Link should be open', async () => {
        const link = await page.getNavBarElements().first().getAttribute('routerLink');
        await expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + link);
    });

});
