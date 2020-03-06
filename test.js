describe('Protractor Demo App', function () {
    async function waitForElementEnabled(element) {
        let i = 0;
        while (i < 30 && !element.isEnabled) {
            browser.sleep(1000)
            i++;
        }
    }

    async function waitForElementDisplayed(element) {
        let i = 0;
        while (i < 30 && !element.isDisplayed) {
            browser.sleep(1000)
            i++;
        }
    }

    it('findElements', function () {
        browser.get('https://www.bbc.com/');
        element(by.id('orb-search-q')).sendKeys("Trump");
        element(by.id('orb-search-button')).click();
        element.all(by.css('.search-results a')).get(1).click()
    });
    
    it('elementCondition', function () {
        const searchField = element(by.id('orb-search-q'));
        waitForElementToBeEnabled(searchField)
    })
});
