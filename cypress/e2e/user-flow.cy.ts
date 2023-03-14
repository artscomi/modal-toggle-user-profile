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

  it("should display the right numbers of users on submit click", () => {
    cy.get("button").contains("Open modal").click();
    cy.get("#userSize").type("16");
    cy.contains("Submit").click();
    cy.get("[data-cy='user-tab']").should("have.length", 16);
  });


  it("should display the right numbers of users on submit enter", () => {
    cy.get("button").contains("Open modal").click();
    cy.get("#userSize").type('8{enter}');
    cy.get("[data-cy='user-tab']").should("have.length", 8);
  });


  it('should display the user profile for the active tab', () => {
    cy.get("button").contains("Open modal").click();
    cy.get("#userSize").type("16");
    cy.contains("Submit").click();
    cy.get('[data-cy="user-tab"]').first().as("firstUserTab");
    cy.get("@firstUserTab").invoke('text').then((text) => {
      cy.get("@firstUserTab").click()
      cy.get('[data-cy="user-profile"]').contains(text).should('exist');
    });
  });


  it('should display an error if the user set more than 20 users', () => {
    cy.get("button").contains("Open modal").click();
    cy.get("#userSize").type("22");
    cy.contains("Submit").click();
    cy.get('[data-cy="error"]')
    cy.contains("You can select up to 20 users, please try again")
  });
});
