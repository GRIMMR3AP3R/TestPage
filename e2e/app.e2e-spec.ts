import { TestpagePage } from './app.po';

describe('testpage App', () => {
  let page: TestpagePage;

  beforeEach(() => {
    page = new TestpagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
