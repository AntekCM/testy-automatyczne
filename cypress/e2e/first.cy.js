/// <reference types="cypress" />

describe("Mój pierwszy test automatyczny", () => {
    it("Otorzenie strony google.com", () => {
        cy.visit("https://google.com")
    })
})