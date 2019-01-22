import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {

  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 30000,

  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    reporter();
  },
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu']
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }

};
