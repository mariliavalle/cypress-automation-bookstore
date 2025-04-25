describe('Verificar paginação', () => {
  beforeEach(() => {
    cy.visit('https://books.toscrape.com/');
  })

  // Minha resolução
  it('C3 - Verificar a paginação', () => {

      cy.get('.current').should('contain', 'Page 1 of 50');
      cy.get('.next > a').click();
      cy.get('.current').should('contain', 'Page 2 of 50');
  })

  // Sugestão da IA para testar como QA Pleno
  it('C3 - Verificar todas as páginas da paginação', () => {
    let paginaAtual = 1;

    function verificarPagina() {
      // Verifica que estamos na página certa
      cy.get('.current').should('contain', `Page ${paginaAtual} of 50`);

      // Tenta encontrar o botão "Next"
      cy.get('ul.pager').then(($pager) => {
        const botaoNext = $pager.find('.next > a');

        // Se existir botão "Next", clica e continua
        if (botaoNext.length > 0) {
          cy.wrap(botaoNext).click();
          paginaAtual++;
          verificarPagina(); // chama novamente para a próxima página
        } else {
          // Se não houver botão, estamos na última página
          cy.get('.next').should('not.exist');
        }
      });
    }

    verificarPagina(); // Começa na página 1
  });

})