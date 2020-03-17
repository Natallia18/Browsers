let yandex = require('./PageObject.js');
let waiters = require('./expectations.js');

describe('Locations', function () {
    let london;
    let paris;

    it('should collect data for London', async function () {
        await browser.get('https://yandex.by/');
        await waiters.waitForelementIsPresent(yandex.geoName);
        yandex.geoName.click();
        await waiters.waitForelementIsPresent(yandex.geoInput);
        yandex.geoInput.clear();
        yandex.geoInput.sendKeys("Лондон");
        await waiters.waitForelementIsPresent(yandex.geoInputDropdown);
        yandex.geoInputDropdown.click();
        await waiters.waitForelementIsPresent(yandex.elseButton);
        yandex.elseButton.click();
        let london = yandex.elseElements.getText();
    });

    it('should collect data for Paris', async function () {
        await waiters.waitForelementIsPresent(yandex.geoName);
        yandex.geoName.click();
        await waiters.waitForelementIsPresent(yandex.geoInput);
        yandex.geoInput.clear();
        await waiters.waitForelementIsPresent(yandex.geoInput);
        yandex.geoInput.sendKeys("Париж");
        await waiters.waitForelementIsPresent(yandex.geoInputDropdown);
        yandex.geoInputDropdown.click();
        await waiters.waitForelementIsPresent(yandex.elseButton);
        yandex.elseButton.click();
        await waiters.waitForelementIsPresent(yandex.elseElements);
        let paris = yandex.elseElements.getText();
    });

    it('should compare results', async function () {
        await expect(london).toEqual(paris);
    });
});
