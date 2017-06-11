import { SurepulsePage } from './app.po';

describe('surepulse App', () => {
  let page: SurepulsePage;

  beforeEach(() => {
    page = new SurepulsePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
