import { categorias } from '../fixtures/categorias.json'

describe('Navegar entre as categorias', () => {
  beforeEach(() => {
    cy.visit('https://books.toscrape.com/');
  });

  it('C1 - Navegar entre as categorias de livros', () => {
    categorias.forEach(categiria => {
      cy.contains('a', categiria.categoria).click();
      cy.get('h1').should('have.text', categiria.categoria);
    })
  })
})