describe('Locations', function () {
    let london;
    let paris;

    it('should collect data for London', async function () {
        await browser.get('https://yandex.by/');
        await browser.sleep(1000);
        await element(by.css('.geolink__reg')).click();
        await browser.sleep(1000);
        await browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toEqual(2);
            browser.switchTo().window(handles[1])
        });
        await element(by.id('city__front-input')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await element(by.id('city__front-input')).sendKeys(protractor.Key.DELETE);
        await element(by.id('city__front-input')).sendKeys("Лондон");
        await browser.sleep(1000);
        await element(by.xpath('//li[1]')).click();
        await browser.sleep(1000);
        await element(by.xpath('//div[1]/a[9]')).click();
        await browser.sleep(1000);
        let london = await element.all(by.css('.home-link.home-tabs__more-link.home-link_black_yes')).getText();
        console.log(london);
    });

    it('ashould collect data for Paris', async function () {
        await element(by.css('.geolink__reg')).click();
        await browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toEqual(3);
            browser.switchTo().window(handles[2])
        });
        await element(by.id('city__front-input')).sendKeys(protractor.Key.chord(protractor.Key.CONTROL, 'a'));
        await element(by.id('city__front-input')).sendKeys(protractor.Key.DELETE);
        await element(by.id('city__front-input')).sendKeys("Париж");
        await browser.sleep(1000);
        await element(by.xpath('//li[1]')).click();
        await browser.sleep(2000);
        await element(by.xpath('//div[1]/a[9]')).click();
        await browser.sleep(2000);
        let paris = await element.all(by.css('.home-link.home-tabs__more-link.home-link_black_yes')).getText();
        console.log(paris);
    });

    it('should compare results', async function () {
        await expect(london).toEqual(paris);
    });
});
