let yandex = require('./PageObject.js');
let waiters = require('./expectations.js');

describe('yandexMail', function () {

    it('should login in mail', async function () {
        await yandex.getBrowser1();

        await waiters.waitForelementIsPresent(yandex.mailButton);
        yandex.mailButton.click();
        yandex.workWithElements()
        await browser.getAllWindowHandles().then(function (handles) {
            expect(handles.length).toEqual(2);
            browser.switchTo().window(handles[1])
        });
        await waiters.waitForelementIsPresent(yandex.mailInput);
        yandex.mailInput.sendKeys("AutotestUser");
    })

});