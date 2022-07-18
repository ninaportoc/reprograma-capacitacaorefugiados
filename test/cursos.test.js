const cursosModel = require("../src/models/cursosModel")

describe("GET route test", () => {
    const course = new cursosModel({
        "title": "teste curso",
        "description": "teste descrição",
        "category": "testes",
    });
    it("Deve chamar o schema e retornar o nome do curso", () => {
        expect(course.title).toBe("teste curso");
    });
    it("Deve chamar o schema e retornar a descrição do curso", () => {
        expect(course.description).toBe("teste descrição");
    });
    it("Deve chamar o schema e retornar a categoria do curso", () => {
        expect(course.category).toStrictEqual(["testes"]);
    });
});

describe("ADD route test", () => {
    const course = new cursosModel({
        "title": "teste curso",
        "description": "teste descrição",
        "category": "testes",
    });
    it("Deve salvar o novo curso no banco de dados", () => {
        course.save().then((dados) => {
            expect(dados.title).toBe("teste curso");
        });

    });
})

describe("UPDATE route test", () => {
    it("Deve editar o título do curso e adicioná-lo no banco de dados", () => {
        const course = new cursosModel({
            "title": "teste curso",
            "description": "teste descrição",
            "category": "testes",
        });
        course.title = "novo curso teste"
        course.save().then((dados) => {
            expect(dados.title).toBe("novo curso teste")
        });
    });
})

describe("DELETE route test", () => {
    it("Deve excluir o novo curso", () => {
        const course = new cursosModel({
            "title": "teste curso",
            "description": "teste descrição",
            "category": "testes",
        });
        course.save().then((dados) => {
            course.delete().then((novosdados) => {
                expect(dados.title).toBe(null);
            })
        });
    });
})

