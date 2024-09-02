class Women {
    get topsCheckBox() {
        return  cy.get("#layered_category_4")
    }

    get dressesCheckBox() {
        return cy.get("#layered_category_8")
    }

    get sizesCheckBox() {
        return cy.get('#ul_layered_id_attribute_group_1 input')
    }

    checkTops() {
        this.topsCheckBox.click();
    }

    checkDresses() {
        this.dressesCheckBox.click();
    }

    checkSizes() {
        this.sizesCheckBox.check();
    }
}

export default new Women();