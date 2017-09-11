import { Angular2BoroughPage } from "./app.po";

describe("angular2-borough App", function() {
  let page: Angular2BoroughPage;

  beforeEach(() => {
    page = new Angular2BoroughPage();
  });

  it("should display message saying app works", () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual("app works!");
  });
});
