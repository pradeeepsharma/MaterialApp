<<<<<<< HEAD
import { browser, element, by } from 'protractor';

export class DummyPage {
=======
import { browser, by, element } from 'protractor';

export class MaterialAppPage {
>>>>>>> 66184cebd8022cfa2694211c111a3c7f1dfcb409
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
