import { FavorDropPage } from './app.po';

describe('favor-drop App', () => {
  let page: FavorDropPage;

  beforeEach(() => {
    page = new FavorDropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('fd works!');
  });
});
