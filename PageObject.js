function yandex () {
    this.geoName = element(by.css('.geolink__reg'));
    this.geoInput = element(by.css('.input__control.input__input'));
    this.geoInputDropdown = element(by.xpath('//li[1]'));
    this.elseButton = element(by.xpath('//div[1]/a[9]'));
    this.elseElements = element.all(by.css('.home-link.home-tabs__more-link.home-link_black_yes')).getText();
    this.checkbox =(element(by.xpath('//input[id=7893318_153043]')));
    this.radioButton = (element(by.xpath ('//input[id=delivery]')));
    this.dropdown = (element(by.css('.button.button_theme_normal')));
    this.dropdownElement = (element(by.xpath('//option(contains(text(),12')));
    this.input = (element(by.id('header-search')));

}
module.exports = new yandex();