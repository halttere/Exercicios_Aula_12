/// <reference types="cypress" />

context("Exercicio - Testes End-to-end - Fluxo de pedido", () => {
  /*  Como cliente 
          Quero acessar a Loja EBAC 
          Para fazer um pedido de 4 produtos 
          Fazendo a escolha dos produtos
          Adicionando ao carrinho
          Preenchendo todas opções no checkout
          E validando minha compra ao final */

  beforeEach(() => {
    cy.visit("/");
    cy.fixture("perfil").then((dados) => {
      cy.login(dados.usuario, dados.senha);
      cy.get("#primary-menu > .menu-item-629 > a").click();
    });
  });

  it("Deve adicionar um carrinho utilizando comando customizado", () => {
    cy.addProdutos("Abominable Hoodie", "M", "Green", 1);
    cy.go(-2);

    cy.addProdutos("Abominable Hoodie", "M", "Red", 1);
    cy.go(-2);

    cy.addProdutos("Abominable Hoodie", "S", "Green", 1);
    cy.get(".woocommerce-message > .button").click();
    cy.get(".checkout-button").click();
  });

  afterEach(() => {
    cy.fixture("DetalheFaturamento").then((dados) => {
      cy.detalheFaturamento(dados);
      cy.get("#terms").click();
      cy.get("#place_order").click();
    });
  });
});
