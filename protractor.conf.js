var protractorBase = __dirname + '/node_modules/protractor/';
var webdriverVersions = require(protractorBase + 'config.json').webdriverVersions;

exports.config = {
  multiCapabilities: [{
      browserName: 'chrome',
      chromeOptions: {
          args: ['no-sandbox']
      }
  }],
  baseUrl: 'http://localhost:8088/',
  seleniumServerJar: protractorBase + 'selenium/selenium-server-standalone-' + webdriverVersions.selenium + '.jar',
  framework: 'jasmine2',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
};
