/// <reference types="cypress" />

describe("Testy związane z wybieraniem SELECT", () => {
    it("Wejście na stronę http://www.automationpractice.pl/", () => {
        cy.visit("/");
        cy.get('a[title="Women"]').click();
        cy.url().should("include", "http://www.automationpractice.pl/index.php?id_category=3&controller=category"); 
    
    })

    it("Wybranie filtra InStock", () => {
        cy.get("#selectProductSort").select("In stock");
        cy.get("#selectProductSort").should("have.value", "quantity:desc");
    })

    it("Wybranie filtra Product name: A to Z", () => {
        cy.get("#selectProductSort").select("name:asc");
        cy.get("#selectProductSort").should("have.value", "name:asc");
    })
})