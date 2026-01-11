describe("add a product to cart", () => {
  it("should be able to navigate to the product page and add it to the cart", () => {
    cy.visit("https://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");

    // add to cart
    cy.contains("Add to Cart").click();

    // cart count should be 1
    cy.contains("Cart (1)").should("exist");
  });

  it("should not count duplicated products in the cart", () => {
    cy.visit("https://localhost:3000");

    cy.get('a[href^="/product"]').first().click();

    cy.url().should("include", "/product");

    // add to cart twice
    cy.contains("Add to Cart").click();
    cy.contains("Add to Cart").click();

    // cart count should be 1
    cy.contains("Cart (1)").should("exist");
  });
});
