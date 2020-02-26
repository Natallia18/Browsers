let webdriver = require('selenium-webdriver');
function Singletone() {
    if(Singletone.instance) {
        return Singletone.instance
    }
    
    var newDriver = function () {
        return new webdriver.Builder().forBrowser('chrome').build()
    };
    Singletone.instance = this;
    this.driver = newDriver()
}
var driver = new Singletone();













