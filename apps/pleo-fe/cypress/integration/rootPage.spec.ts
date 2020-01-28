describe('The root page', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('shows correct content in sidebar nav and main content area', () => {
    // main content is empty
    cy.get('[data-cy=mainContent]').should('be.empty');

    // sideNav contains three parts: logo, userInfo, and links
    const sideNav = cy.get('[data-cy=sideNav]');

    const children = sideNav.children().should('have.length', 3);

    children
      .first()
      .should('have.attr', 'data-cy', 'pleo-logo')
      .next()
      .should('have.attr', 'data-cy', 'side-nav-user-info')
      .next()
      .should('have.attr', 'data-cy', 'side-nav-links')
      .contains('Expenses');
  });

  it('side navigation navigates to expenses and shows correct content', () => {
    cy.get('[data-cy=sideNav]')
      .get('[data-cy=side-nav-links]')
      .contains('Expenses')
      .click();

    cy.url().should('include', '/expenses');

    cy.get('[data-cy=mainContent]').should('not.be.empty');
  });

  it('lets you open a modal to create a new expense', () => {
    cy.get('[data-cy=sideNav]')
      .contains('Expenses')
      .click();

    cy.get('[data-cy=createExpenseForm]').should('not.exist');
    cy.get('[data-cy=createExpenseButton]').click();
    cy.get('[data-cy=modal]').should('exist');
    cy.get('[data-cy=createExpenseForm]').should('exist');
  });
});
