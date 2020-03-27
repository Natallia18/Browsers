const yandex = require('./PageObject.js');
const waiters = require('./expectations.js');
const methods = require('./methods.js');

describe('Services', function () {

    it('check buttons', async function () {
        await browser.get('https://market.yandex.by/catalog/54726/list?local-offers-first=0&deliveryincluded=0&onstock=1/');
        await waiters.waitForelementIsPresent(yandex.checkbox);
        yandex.checkbox.click();
        await waiters.waitForelementIsPresent(yandex.checkbox);
        yandex.checkbox.click();
        await waiters.waitForelementIsPresent(yandex.checkbox);
        await browser.actions().sendKeys(protractor.Key.END).perform();
        await browser.actions().sendKeys(protractor.Key.HOME).perform();
        await waiters.waitForelementIsPresent(yandex.radioButton);
        await method.scrollToDropdown();
        yandex.dropdown.click();
        await waiters.waitForelementIsPresent(yandex.dropdownElement);
        yandex.dropdownElement.click();
        await method.scrollToInput();
        await waiters.waitForelementIsPresent(yandex.input);
        yandex.input.sendKeys("Телефон");
        await console.log(yandex.input.getAttribute('value'));
        methods.getClass();
    });
});
