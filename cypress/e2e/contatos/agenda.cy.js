/// <reference types='cypress' />

describe ('testes para agenda de contatos', () => {
    beforeEach(()=>{
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })

    it('deve adicionar contato', ()=> {
        cy.get('input[type="text"]').type('Arthur Perez')
        cy.get('input[type="email"]').type('ArthurPerez@gmail.com')
        cy.get('input[type="tel"]').type('43 87456123')
        cy.get('.adicionar').click()
        cy.get('input').should('have.length', 3)
        
    })
    
    it('Deve limpar formulario', ()=> {
        cy.get('.edit').first().click()
        cy.get('input[type="text"]').clear()
        cy.get('input[type="email"]').clear()
        cy.get('input[type="tel"]').clear()
        cy.get('input').should('be.empty')
        
            it('Deve adicionar dados e salvar', ()=> {
                cy.get('input[type="text"]').type('Gabriela Oliveira')
                cy.get('input[type="email"]').type('GabrielaOliveira@gmail.com')
                cy.get('input[type="tel"]').type('45 12345678')
                cy.get('.adicionar').click()
            })
    })

    it('Deve deletar contato', ()=> {
        cy.get('.delete').last().click()
    })
})