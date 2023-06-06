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
  });

  it("Deve fazer um pedido na loja Ebac Shop de ponta a ponta", () => {
    cy.get(".product").eq(0).click(); // Clicar no primeiro produto
    cy.get(".add-to-cart").click(); // Clicar no botão "Adicionar ao carrinho"
    cy.get(".product").eq(1).click(); // Clicar no segundo produto
    cy.get(".add-to-cart").click(); // Clicar no botão "Adicionar ao carrinho"
    // Repita os passos acima para selecionar e adicionar mais produtos, se necessário
  });
});
