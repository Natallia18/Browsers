let yandex = require('./PageObject.js');
let waiters = require('./expectations.js');

yandex.getBrowser();
yandex.setLocation("Лондон");
const LondonLocation = yandexPage.getMore();
yandexPage.setLocation("Париж");
const ParisLocation = yandexPage.getMore();
expect(LondonLocation).to.equal(ParisLocation);