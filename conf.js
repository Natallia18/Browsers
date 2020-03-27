exports.config = {
    directConnect: true,
    framework: 'jasmine',
    jasmineNodeOpts: {
        defaultTimeoutInterval: 240000
    },
    specs: ['yandexPage.js'],
    onPrepare: function () {
        browser.waitForAngularEnabled(false);
        browser.manage().window().maximize();
    },

        capabilities: {
            'browserName': 'chrome'
        },
};
