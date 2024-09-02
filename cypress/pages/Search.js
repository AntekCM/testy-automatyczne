import { searchPhrase } from "../fixtures/searchData.json";

class Search {

    get oknoWyszukiwania() {
        return cy.get("#search_query_top")
    }

    typeSearchPhrase() {
        this.oknoWyszukiwania.type(searchPhrase)
    }

    clearSearchPhrase() {
        this.oknoWyszukiwania.clear();
    }

}

export default new Search();