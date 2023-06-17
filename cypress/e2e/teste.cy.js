describe('Login e cadastro de usuários', () => {

    describe('Cadastro de usuários', () => {
        beforeEach(() => {
            cy.visit('Site/cadastro.html');
            
        })

        it('Caso de Teste 01 - Cadastro Realizado com Sucesso', () => {

            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('.tit', 'Cadastro Realizado com Sucesso!').should('be.visible');
        })
    
        it('Caso de Teste 02 - Cadastro sem nome ', () => {
    
            // Não será informado o nome no campo
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroNome', 'O campo de nome é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 03 - Cadastro sem e-mail ', () => {
    
            cy.get('#nome').click().type('Leticia');
            //não será informado o e-mail no campo
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroEmail', 'O campo e-mail é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 04 - Cadastro sem telefone', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            //não será telefone no campo
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroTelefone', 'O campo telefone é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 05 - Cadastro sem endereço', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            //não será informado o endereço no campo
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroEndereco', 'O campo endereço é obrigatório').should('be.visible');
    
        })
    
        it('Caso de Teste 06 - Cadastro sem CPF', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            //não será informado o cpf no campo
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroCpf', 'O campo CPF é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 07 - Cadastro sem Data de Nascimento', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            //não será informado a data de nascimento no campo
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroData', 'O campo data de nascimento é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 08 - Cadastro sem Senha', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            //não será informado a senha no campo
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroSenha', 'O campo senha é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 09 - Cadastro sem Confirmação de Senha', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            //não será informado a confirmação de senha no campo
            cy.get('button').click();
            cy.contains('#erroConfirmarSenha', 'O campo confirmar senha é obrigatório').should('be.visible');
        })
    
        it('Caso de Teste 10 - Cadastro com e-mail inválido', () => {
    
            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('lety');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('#erroEmail', 'O e-mail informado é inválido').should('be.visible');
        })
    
    })

    describe('Login de usuários',() => {
        beforeEach(() => {
            cy.visit('Site/login.html');
            
        })
        it('Caso de Teste 01 - Login Realizado com Sucesso', () => {
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#senha').click().type('123456789');
            cy.get('button').click();
             cy.contains('.tit', 'Login realizado!').should('be.visible');
        })
    
        it('Caso de Teste 02 - Login sem e-mail', () => {
            cy.get('#senha').click().type('123456789');
            cy.get('button').click();
            cy.contains('#erroEmail', 'Informe o e-mail').should('be.visible');
        })
    
        it('Caso de Teste 03 - Login sem senha', () => {
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('button').click();
            cy.contains('#erroSenha', 'Informe a senha').should('be.visible');
        })
    })

    describe('Cadastro e Login de um usuário',() => {
        beforeEach(() => {
            cy.visit('Site/cadastro.html');    
        })
        it('Caso de Teste 0 - Cadastro e login de um usuário', () => {

            cy.get('#nome').click().type('Leticia');
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#telefone').click().type('62985292884');
            cy.get('#endereco').click().type('Rua 56 QdZ 51 Lote 27');
            cy.get('#cpf').click().type('064.848.651-67');
            cy.get('#data-nascimento').click().type('2001-12-29');
            cy.get('#senha').click().type('123456789');
            cy.get('#confirmarSenha').click().type('123456789')
            cy.get('button').click();
            cy.contains('.tit', 'Cadastro Realizado com Sucesso!').should('be.visible');
            cy.get('.btn').click()
            cy.get('#email').click().type('letycamargo@gmail.com');
            cy.get('#senha').click().type('123456789');
            cy.get('button').click();
            cy.contains('.tit', 'Login realizado!').should('be.visible');
        
        })
        
    })


})

 
