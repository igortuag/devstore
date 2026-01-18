describe("add a product to cart", () => {
  it("should be able to search for a product", () => {
    cy.searchByQuery("moletom");
    
    cy.location("pathname").should("include", "/search");
    cy.location("search").should("include", "q=moletom");

    // click on the first product in the search results
    cy.get('a[href^="/product"]').should("exist");
  });

  it("should not be able to visit search page without a query", () => {
    cy.on("uncaught:exception", () => {
      return false;
    });

    cy.visit("/search");

    cy.location("pathname").should("equal", "/");
  });
});
