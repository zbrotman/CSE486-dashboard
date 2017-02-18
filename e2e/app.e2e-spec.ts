import { Cse486DashboardPage } from './app.po';

describe('cse486-dashboard App', function() {
  let page: Cse486DashboardPage;

  beforeEach(() => {
    page = new Cse486DashboardPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
