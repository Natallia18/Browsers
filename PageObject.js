function yandex () {
    this.geoName = element(by.css('.geolink__reg'));
    this.geoInput = element(by.id('city__front-input'));
    this.geoInputDropdown = element(by.xpath('//li[1]'));
    this.elseButton = element(by.xpath('//div[1]/a[9]'));
    this.elseElements = element.all(by.css('.home-tabs__more-top')).all(by.css('.home-tabs__more-item'));
    this.elseLowerElements = element.all(by.css('.home-link.home-tabs__more-link.home-link_black_yes')).getText();
}
module.exports = new yandex();