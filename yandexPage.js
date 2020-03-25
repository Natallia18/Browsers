let yandex = require('./PageObject.js');

describe('Locations', function () {

    it("City", function () {
        yandex.getYandexPage();
        yandex.setLocation("Лондон");
        const LondonLocation = yandex.getMore();
        yandex.setLocation("Париж");
        const ParisLocation = yandex.getMore();
        expect(LondonLocation).toEqual(ParisLocation);

    })
});



