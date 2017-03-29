import { MagicStrategyProtoAppPage } from './app.po';

describe('magic-strategy-proto-app App', () => {
  let page: MagicStrategyProtoAppPage;

  beforeEach(() => {
    page = new MagicStrategyProtoAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
