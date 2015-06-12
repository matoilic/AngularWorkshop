exports.config = {
  capabilities: {
    'browserName': 'chrome'
  },
  baseUrl: 'http://localhost:8088/',
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'jasmine',

  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }

};
