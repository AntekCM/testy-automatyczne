/// <reference types="cypress" />

import Search from "../pages/Search";
import Dase from "../pages/Dase";
import { searchPhrase, notFoundProduct } from "../fixtures/searchData.json";
import ResultPage from "../pages/ResultPage";
describe("Wpisywanie tekstu w wyszukiwarkę", () => {
    it("Wejście na stronę http://www.automationpractice.pl/", () => {
        Dase.openHomePage();
        Search.typeSearchPhrase(searchPhrase);
        Search.oknoWyszukiwania.should("have.value", searchPhrase);
        cy.wait(3000);
        Search.clearSearchPhrase();
        cy.wait(3000);
        Search.oknoWyszukiwania.type("Przykładowa treść {enter}");
        Search.typeSearchPhrase(`${searchPhrase}  {enter}`) //nie działa nie wiem czemu
        ResultPage.searchAlert.should("be.visible").and("include.text", notFoundProduct);
        Search.oknoWyszukiwania.should("have.class", "search_query");
        Search.oknoWyszukiwania.should("have.css", "margin-right", "1px")
        

    
    })

})