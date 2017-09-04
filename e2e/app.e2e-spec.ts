import { NestedFormsTestPage } from './app.po';

describe('nested-forms-test App', () => {
  let page: NestedFormsTestPage;

  beforeEach(() => {
    page = new NestedFormsTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
