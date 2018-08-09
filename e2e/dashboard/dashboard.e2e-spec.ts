import { DashboardPage } from './dashboard.po';
import { browser, by } from '../../node_modules/protractor';

describe('dashboard Page', () => {
    let page: DashboardPage;
    beforeEach(() => {
        page = new DashboardPage();
        page.navigateTo();
    });

    it('should navigate', () => {
        expect(browser.getCurrentUrl()).toEqual(browser.baseUrl + '/dashboard');
    });

    it('should have title', async () => {
        expect(page.getTitle().isDisplayed()).toBe(true);
        expect(await page.getTitle().getText()).toBe('Top Heroes');
    });

    it('grid should contain heros', () => {
        const heroModuleCount = page.getTopHeroGridModules().count();
        expect(heroModuleCount).toBeGreaterThan(0);
    });

    it('should have a hero Search', () => {
        expect(page.getHeroSearch().isPresent()).toBe(true);
        expect(page.getHeroSearch().isDisplayed()).toBe(true);
    });

    it('search should find heros', async () => {
        const firstHeroName = await page.getTopHeroGridModules().first().element(by.css('h4')).getText();
        page.getHeroSearchTextBox().sendKeys(firstHeroName);
        const searchResultTextField = page.getHeroSearchResults().map(async (e) => await e.getText());
        expect(searchResultTextField).toContain(firstHeroName);
    });

    it('search should open detail page', async () => {
        const firstHeroName = await page.getTopHeroGridModules().first().element(by.css('h4')).getText();
        page.getHeroSearchTextBox().sendKeys(firstHeroName);
        const firstSearchResult = page.getHeroSearchResults().first();
        firstSearchResult.click();
        expect(browser.getCurrentUrl()).toMatch('detail\/[0-9]+');
    });

});
