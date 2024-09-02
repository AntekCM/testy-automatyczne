/// <reference types="cypress" />

import Dase from "../pages/Dase";
import Home from "../pages/Home";
import Women from "../pages/Women";

describe("Test checkboxa", () => {

    it("Wejście na stronę TEST", () => {
        Dase.openHomePage();

    })



    it("Wejście na stronę http://www.automationpractice.pl/", () => {
        Dase.openHomePage();
        Home.womenTab.click();
        cy.url().should("include", "http://www.automationpractice.pl/index.php?id_category=3&controller=category"); 
    })

    it("Zaznaczanie checkboxa nr 1", () => {

        Women.checkTops();
        Women.topsCheckBox.should("be.checked");
    })

    it("Zaznaczanie checkboxa nr 2", () => {

        Women.checkDresses();
        Women.dressesCheckBox.should("be.checked");
    })

    it("Zaznaczanie checkboxów z grupy rozmiarów", () => {

        Women.checkSizes();
        Women.sizesCheckBox.should("be.checked");
    })
})    