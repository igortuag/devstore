describe("add a product to cart", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should be able to search for a product", () => {
    // search for a product
    cy.get('input[name="q"]').type("moletom").parent("form").submit();

    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    // click on the first product in the search results
    cy.get('a[href^="/product"]').should("exist");
  });
});
