describe("My First Firefox Test", { browser: 'firefox' }, () => {
    it("Assert Text Field", () => {
      cy.visit("http://localhost:8080");
      cy.contains("Hello From Firefox");
    });
  });

  
  describe("My First Chrome Test", { browser: 'chrome' }, () => {
    it("Assert Text Field", () => {
      cy.visit("http://localhost:8080");
      cy.contains("Hello From Chrome");
    });
  });
  
  describe("My First Edge Test", { browser: 'edge' }, () => {
    it("Assert Text Field", () => {
      cy.visit("http://localhost:8080");
      cy.contains("Hello From Edge");
    });
  });
  