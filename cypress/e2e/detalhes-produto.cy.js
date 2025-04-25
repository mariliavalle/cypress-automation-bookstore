describe('Verificar detalhes do produto', () => {
    beforeEach(() => {
        cy.visit('https://books.toscrape.com/');
    })

    it('C2 - Testar página de detalhes do produto "A Court of Thorns and Roses"', () => {
        cy.contains('a', 'Fantasy').click();
        cy.contains('A Court of Thorns').click();

        // Verificação do título
        cy.get('h1').should('have.text', 'A Court of Thorns and Roses (A Court of Thorns and Roses #1)');

        // Verificação do valor
        cy.get('.product_main > .price_color').should('have.text', '£52.37');

        // Verificação da disponibilidade
        cy.get('.availability').should('be.visible');

        // Verificação da descrição
        cy.get('#product_description').next().should('contain.text', 'Feyre kills a wolf in the woods, a beast-like creature arrives to demand retribution for it.');

        // Verificação da exibição da imagem do produto
        cy.get('.item.active img').should('be.visible')
    })
})