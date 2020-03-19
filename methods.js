function methods() {
    this.scrollToDropdown = async function () {
        let dropdown = element(by.css('.button.button_theme_normal'));
        browser.executeScript("arguments[0].scrollIntoView();", dropdown);
        await browser.sleep(7500);
        dropdown.click();
    };

    this.scrollToInput = async function () {
        let input = element(by.id('header-search'));
        browser.executeScript("arguments[0].scrollIntoView();", input);
        await browser.sleep(7500);
        input.click();
    };

    this.getClass = function () {
        let attribute = element(by.id('header-search'));
        expect(attribute.getAttribute('class')).toEqual('input__control');
    };
}

module.exports = new methods();
