describe('Login e registro de usuários', () => {
    beforeEach(() => {
        cy.visit('Site/index.html');
        
    })

    it('Caso de Teste 1 - Cadastro', () => {
        cy.get('#nome').click().type('Leticia');
        cy.get('#email').click().type('letycamargo@gmail.com');
        cy.get('#telefone').click().type('62985292884');
        cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
        cy.get('#cidade').click().type('Ceres');
        cy.get('#estado').click().type('Goiás');
        cy.get('#senha').click().type('123456789');
        cy.get('#Confirmarsenha').click().type('123456789')
        cy.get('button').click();
        cy.contains('p', 'Realizado com Sucesso!').should('be.visible');
    })

    it('Caso de Teste 2 - Login', () => {
        cy.get('a').click();
        cy.get('#email').click().type('letycamargo@gmail.com');
        cy.get('#senha').click().type('123456789');
        cy.get('button').click();
        cy.contains('p', 'Realizado com Sucesso!').should('be.visible');
    })
})

