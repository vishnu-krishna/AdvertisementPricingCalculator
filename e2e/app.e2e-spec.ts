import { SeekPage } from './app.po';

describe('seek App', function() {
  let page: SeekPage;

  beforeEach(() => {
    page = new SeekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
