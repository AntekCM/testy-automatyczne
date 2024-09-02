/// <reference types="cypress" />
import { login, password } from "../fixtures/login.json";

describe("Custom Commands", () => {
   it("Logowanie do strony atomationpractice.pl", () => {
    cy.login(login, password);
   }) 
})