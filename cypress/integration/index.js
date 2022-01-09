import { terminalLog } from "../utils/axe";
describe("My First Firefox Test", { browser: "firefox" }, () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.injectAxe();
  });
  it("Assert Text Field", () => {
    cy.contains("Hello From Firefox");
    cy.checkA11y();
  });
});

describe("My First Chrome Test", { browser: "chrome" }, () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.injectAxe();
  });
  it("Assert Text Field", () => {
    cy.contains("Hello From Chrome");
    cy.checkA11y(null, null, terminalLog);
  });
});

describe("My First Edge Test", { browser: "edge" }, () => {
  beforeEach(() => {
    cy.visit("http://localhost:8080");
    cy.injectAxe();
  });
  it("Assert Text Field", () => {
    cy.checkA11y();
    cy.contains("Hello From Edge");
  });
});
