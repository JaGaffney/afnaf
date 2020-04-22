it("visits the app", () => {
  cy.visit("http://localhost:8000/")
})

describe("Traveling", () => {
  it("Can move to main page", () => {
    cy.get(".nav-title").click()
    cy.get(".anime-filter-container").should("be.visible")
  })
  it("Can move to anime page", () => {
    cy.get(".anime-preview")
      .eq(0)
      .click()
    cy.get(".review-details-title > h1").should("be.visible")
  })

  it("Can move to ratings page", () => {
    cy.get(".footer-link").click()
    cy.get(".ratings-top > h3").should("be.visible")
    cy.get(".nav-title").click()
  })
})

describe("Landing page", () => {
  it("Landing page loads correctly", () => {
    cy.get(".nav-title-quote").should("be.visible")
  })

  it("Filter button can be toggled", () => {
    cy.get(".filter-button-container").click()
    cy.get(".filter-button")
      .contains("kids")
      .click()
    cy.get(".filter-button")
      .contains("friends")
      .click()
    cy.get(".filter-button")
      .contains("reset")
      .click()
    cy.get(".filter-button-container").click()
  })

  it("When filter option is selected those shows appear", () => {
    cy.get(".filter-button-container").click()
    cy.get(".filter-button")
      .contains("kids")
      .click()
    cy.get(".anime-preview-tags-container").each(($el, index) => {
      expect($el).to.contain("kids")
    })
    cy.get(".filter-button-container").click()
  })

  it("Can type into the search bar", () => {
    cy.get(".search-container > input")
      .type("violet evergarden")
      .should("have.value", "violet evergarden")
    cy.get(".anime-preview-title").contains("Violet Evergarden")
  })
})

describe("Anime page", () => {
  it("Anime page loads correctly", () => {
    cy.get(".anime-preview-title")
      .contains("Violet Evergarden")
      .click()
    cy.get(".nav-title-quote").should("be.visible")
    cy.get(".review-details-title > h1").should("be.visible")
  })

  it("Content has generated correctly", () => {
    cy.get(".review-details-description > p")
      .eq(0)
      .should("be.visible")
    cy.get(".review-details-description > p")
      .eq(1)
      .should("be.visible")
    cy.get(".review-raitings-description")
      .eq(0)
      .should("be.visible")
    cy.get(".review-raiting-card-inner")
      .eq(0)
      .within(() => {
        cy.get("div > a > span > span").should("have.length", 5)
      })
  })
})

describe("Ratings page", () => {
  it("Ratings page loads correctly", () => {
    cy.get(".raitings-link").click()
    cy.get(".nav-title-quote").should("be.visible")
    cy.get(".ratings-top > h3").should("be.visible")
  })
})
