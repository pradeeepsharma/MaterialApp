<<<<<<< HEAD
import { DummyPage } from './app.po';

describe('dummy App', () => {
  let page: DummyPage;

  beforeEach(() => {
    page = new DummyPage();
=======
import { MaterialAppPage } from './app.po';

describe('material-app App', () => {
  let page: MaterialAppPage;

  beforeEach(() => {
    page = new MaterialAppPage();
>>>>>>> 66184cebd8022cfa2694211c111a3c7f1dfcb409
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
