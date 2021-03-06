const url = "https://cdpn.io/choskim/fullpage/RLYebL";
/* declaramos uma constante passando a url onde iremos realizar os nossos testes */

/* usamos o describe para iniciar o nosso teste passando a sua descrição e dentro dele
passamos a função it que passamos qual funcionalidade esperamos receber*/
describe("My test for luiza labs", function() {
  it("Long click Event", function() {
    /* com a função visit como proprio nome induz vamos acessar a url que vem da nossa constante */
    cy.visit(url);
    /* pegamos entao a tag iframe que vem de dentro da nossa DOM */
    cy.get("iframe").then($iframe => {
      /* criamos uma constante onde vamos passar a funcionalidade de touch  */
      const pointerEvent = {
        force: true,
        pointerType: "touch"
      };
      /* criamos uma constante que vai receber os dados da div.square onde esta nosso componente css */
      const $element = $iframe.contents().find("div.square");
      /* passamos a função wrap para encapsular todos nossos should que seria nossas condições ou afirmações */
      cy.wrap($element)
        /* passamos entao que ele tem que estar visivel e ter o css com os seguintes parametros passados  */
        .should("be.visible")
        .should("have.css", "height", "90px")
        .should("have.css", "width", "90px");
      /* aqui passamos entao nossos gatilhos como se fosse ações com o evento de pointerodwn 
    e passamos nossa constante pointerEvent que vai realizar o touch com o tempo de 1000ms */
      cy.wrap($element)
        .trigger("pointerdown", pointerEvent)
        .wait(1000)
        .trigger("pointerup", pointerEvent);
      /* por fim pegamos o estado final da nossa div com os seguintes parametro informados */
      cy.wrap($element)
        .should("be.visible")
        .should("have.css", "height", "225px")
        .should("have.css", "width", "225px");
    });
  });
});
