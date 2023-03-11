describe("User flow", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("open and close modal", () => {
    cy.get("button").contains("Open modal").click();
    cy.get("dialog");
    cy.get("[aria-label='close modal']").click();
    cy.get("dialog").should("not.exist");
  });

  it("should display the right numbers of users", () => {
    cy.get("button").contains("Open modal").click();
    cy.get("#userSize").type("12");
    cy.contains("Submit").click();
    cy.get("[data-cy='user-tab']").should("have.length", 12);
  });


  it('should display the user profile for the active tab', () => {
    cy.get("button").contains("Open modal").click();
    cy.get("#userSize").type("16");
    cy.contains("Submit").click();
    cy.get('[data-cy="user-tab"]').first().as("userTab");
    cy.get("@userTab").invoke('text').then((text) => {
      cy.get("@userTab").click()
      cy.get('[data-cy="user-profile"]').contains(text).should('exist');
    });
  });
});
