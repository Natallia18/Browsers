exports.config = {
    framework: 'jasmine',
    specs: ['assertions.js'],
    onPrepare: function () {
        browser.waitForAngularEnabled(false)
    },
        capabilities: {
            'browserName': 'chrome'
        },
    seleniumAddress: 'http://localhost:4444/wd/hub'
};
