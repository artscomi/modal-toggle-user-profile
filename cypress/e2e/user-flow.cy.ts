describe("User flow", () => {
  it("open and close modal", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").contains("Open modal").click();
    cy.get("dialog");
    cy.get("[aria-label='close modal']").click();
    cy.get("dialog").should("not.exist");
  });

  it("should display the right numbers of users", () => {
    cy.visit("http://localhost:3000");
    cy.get("button").contains("Open modal").click();
    cy.get('#userSize').type("12")
    cy.contains("Submit").click()
    cy.get("[data-cy='user-tab']").should("have.length", 12)
  });
});
