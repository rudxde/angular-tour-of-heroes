import { DashboardPage } from './dashboard.po';
import { browser, by } from '../../node_modules/protractor';

describe('dashboard Page', () => {
    let page: DashboardPage;
    beforeEach(async () => {
        page = new DashboardPage();
        await page.navigateTo();
    });

    it('should navigate', async () => {
        await expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/dashboard');
    });

    it('should have title', async () => {
        await expect(page.getTitle().isDisplayed()).toBe(true);
        await expect(await page.getTitle().getText()).toBe('Top Heroes');
    });

    it('grid should contain heros', async () => {
        const heroModuleCount = await page.getTopHeroGridModules().count();
        await expect(heroModuleCount).toBeGreaterThan(0);
    });

    it('should have a hero Search', async () => {
        await expect(page.getHeroSearch().isPresent()).toBe(true);
        await expect(page.getHeroSearch().isDisplayed()).toBe(true);
    });

    it('search should find heros', async () => {
        const firstHeroName = await page.getTopHeroGridModules().first().element(by.css('h4')).getText();
        await page.getHeroSearchTextBox().sendKeys(firstHeroName);
        const searchResultTextField = await page.getHeroSearchResults().map(async (e) => await e.getText());
        await expect(searchResultTextField).toContain(firstHeroName);
    });

    it('search should open detail page', async () => {
        const firstHeroName = await page.getTopHeroGridModules().first().element(by.css('h4')).getText();
        await page.getHeroSearchTextBox().sendKeys(firstHeroName);
        const firstSearchResult = await page.getHeroSearchResults().first();
        await firstSearchResult.click();
        await expect(browser.getCurrentUrl()).toMatch('detail\/[0-9]+');
    });

});
