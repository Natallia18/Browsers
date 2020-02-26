exports.config = {
framework: 'jasmine',
specs: ['spec.js'],
onPrepare: function() {
browser.waitForAngularEnabled(false)
},
multiCapabilities: [
 {
'browserName': 'internet explorer',
'platform': 'ANY',
'version': '11'
 }, {
'browserName': 'firefox'
}, {
'browserName': 'chrome'
}],
seleniumAddress: 'http://localhost:4444/wd/hub'
};

