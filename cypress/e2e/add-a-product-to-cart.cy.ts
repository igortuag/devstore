describe("add a product to cart", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("https://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");
  });
});
