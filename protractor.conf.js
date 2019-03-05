// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const { SpecReporter } = require('jasmine-spec-reporter');
const os = require('os');

// chrome binary must be specified for win32 systems
const chromeOptions = {};
if (os.platform() === 'win32') {
    chromeOptions.binary = process.env.chrome_bin || 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe'
} else {
    // disabled because headless chrome runs on TeamCity, but in local development we should see the
    // browser which is running
    // chromeOptions.args = ["--headless", "--disable-gpu", "--window-size=800x600"];
}

if (chromeOptions) {
    console.info(`using chrome options`, chromeOptions);
}

// server url can be customized by environment variable
const envServerUrl = process.env.serverUrl;
if (envServerUrl) {
    console.info(`found environment variable serverUrl`, envServerUrl);
}

exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './e2e/**/*.e2e-spec.ts'
  ],
  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': chromeOptions || undefined
  },
  directConnect: true,
  framework: 'jasmine',
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
  onPrepare() {
    require('ts-node').register({
      project: './e2e/tsconfig.e2e.json'
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    // jasmine.getEnv().addReporter(new ScreenshotReporter('reports/e2e-failures'));
  }
};
