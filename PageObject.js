let waiters = require('./expectations.js');

function yandex() {

    this.geoName = element(by.css('.geolink__reg'));
    this.geoInput = element(by.css('.input__control.input__input'));
    this.geoInputDropdown = element(by.xpath('//li[1]'));
    this.elseButton = element(by.xpath('//div[1]/a[9]'));
    this.checkbox = (element(by.xpath('//input[id=7893318_153043]')));
    this.radioButton = (element(by.xpath('//input[id=delivery]')));
    this.dropdown = (element(by.css('.button.button_theme_normal')));
    this.dropdownElement = (element(by.xpath('//option(contains(text(),12')));
    this.input = (element(by.id('header-search')));
    this.mailButton = (element(by.css('.button.desk-notif-card__login-enter-expanded.button_theme_gray')));
    this.mailInput = (element(by.id('passp-field-login')));

    this.getYandexPage = function () {
        browser.get('https://yandex.by/');
    };
    this.getYandexMarket = function () {
        browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1/');
    };
    this.setLocation = async function (city) {
        await waiters.waitForelementIsPresent(this.geoName);
        this.geoName.click();
        await waiters.waitForelementIsPresent(this.geoInput);
        this.geoInput.clear();
        this.geoInput.sendKeys(city);
        await waiters.waitForelementIsPresent(this.geoInputDropdown);
        this.geoInputDropdown.click();
        await waiters.waitForelementIsPresent(this.geoInput);

    };
    this.getMore = async function () {
        await waiters.waitForelementIsPresent(this.elseButton);
        this.elseButton.click();
        let elseElements = element.all(by.css('.home-link.home-tabs__more-link.home-link_black_yes')).getText();
    };

}

module.exports = new yandex();
