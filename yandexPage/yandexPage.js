let waiters = require('../expectations.js');

function yandexPage() {
    this.geoLink = element(by.css('.geolink__reg'));
    this.elseButton = element(by.css('.home-tabs__more-switcher'));
    this.elseButtonLinks = element.all(by.css('.home-tabs__more-link'));
    this.cityInput = element(by.css('.input__input'));
    this.cityDropdownItems = element.all(by.css('.b-autocomplete-item__reg'));


    this.openYandexPage = function () {
        browser.get('https://yandex.by/');
    };

    this.setLocation = async function (city) {
        await waiters.waitForelementIsPresent(this.geoLink);
        this.geoLink.click();
        await waiters.waitForelementIsClickable(this.cityInput);
        this.cityInput.clear();
        this.cityInput.sendKeys(city);
        await waiters.waitForelementIsClickable(this.cityDropdownItems.get(4));
        await browser.actions().sendKeys(protractor.Key.ENTER).perform();
        await waiters.waitForelementIsClickable(this.geoLink);
        await waiters.waitForelementIsClickable(this.elseButton);
        this.elseButton.click();
        await waiters.waitForelementIsPresent(this.elseButtonLinks.last());
    };

    this.getElements = async function () {
        await waiters.waitForelementIsClickable(this.elseButtonLinks.last());
        this.elseButtonLinks.getText();
    };
}

module.exports = new yandexPage();
