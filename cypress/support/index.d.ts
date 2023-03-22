declare namespace Cypress {
  interface Chainable {
    getByCyId(id: string): Chainable<JQuery<HTMLElement>>;
  }
}
