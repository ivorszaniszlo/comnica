describe('Responsive Tests for Image and Button', () => {
  const baseUrl = Cypress.config('baseUrl');
  const imageSelector = 'img[src="https://via.placeholder.com/420x420"]';

  const viewports = [
    { device: 'iphone-14', width: 390, height: 844 },
    { device: 'ipad-pro-m2', width: 1024, height: 1366 },
    { device: 'desktop', width: 1280, height: 720 }
  ];

  viewports.forEach((viewport) => {
    it(`should display the correct image on ${viewport.device}`, () => {
      cy.viewport(viewport.width, viewport.height); 
      cy.visit(baseUrl);
      cy.get(imageSelector).should('exist');
    });

    it(`should log "Button clicked!" on ${viewport.device}`, () => {
      cy.visit(baseUrl);
      cy.window().then((win) => {
        cy.spy(win.console, 'log').as('consoleLog');
      });
      cy.get('button').contains('KEZDHETJÜK').click();
      cy.get('@consoleLog').should('be.calledWith', 'Button clicked!');
    });
  });
});
