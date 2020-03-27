let yandexPage = require('./yandexPage.js');

describe('Locations', function () {

    it("City", function () {
        yandexPage.openYandexPage();
        yandexPage.setLocation("Лондон");
        const LondonLocation = yandexPage.getElements();
        yandexPage.setLocation("Париж");
        const ParisLocation = yandexPage.getElements();
        expect(LondonLocation).toEqual(ParisLocation);
    })
});
