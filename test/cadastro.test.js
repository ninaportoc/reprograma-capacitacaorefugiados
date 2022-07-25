const cadastroModel = require('../src/models/cadastroModel')

describe('GET route test', () => {
    const cadastro = new cadastroModel({
        "nome": "Usuário Qualquer",
        "email": "user@email.com",
        "senha": "72kdh8*"
    });
    it("Deve chamar o schema e retornar o nome do usuário", () => {
        expect(cadastro.nome).toBe("Usuário Qualquer");
    });
    it("Deve chamar o schema e retornar o email do usuário", () => {
        expect(cadastro.email).toBe("user@email.com");
    });
    it("Deve chamar o schema e retornar a senha correta", () => {
        expect(cadastro.senha).toBe("72kdh8*");
    });
});

describe('ADD route test', () => {
    const cadastro = new cadastroModel({
        "nome": "Usuário Qualquer",
        "email": "user@email.com",
        "senha": "72kdh8*"

    });
    it("Deve criar no banco de dados um novo usuário", () => {
        cadastro.save().then((dados) => {
            expect(dados.nome).toBe("Usuário Qualquer");
        });
    });
})

describe("UPDATE route test", () => {
    it("Deve modificar o nome e atualizar no banco de dados o nome do usuário", () => {
        const cadastro = new cadastroModel({
            "nome": "Usuário Qualquer",
            "email": "user@email.com",
            "senha": "72kdh8*"
        });

        cadastro.nome = "novo nome teste"
        cadastro.save().then((dados) => {
            expect(dados.nome).toBe("novo nome teste");

        });
    });
})

describe("DELETE route test", () => {
    it("Deve excluir os dados de um usuário", () => {
        const cadastro = new cadastroModel({
            "nome": "Usuário Qualquer",
            "email": "user@email.com",
            "senha": "72kdh8*"
        });
        cadastro.save().then((dados) => {
            cadastro.delete().then((dados) => {
                expect(dados.nome).toBe(null);

            })
        });
    });
})
