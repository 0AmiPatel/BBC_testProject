const { defineConfig } = require('cypress')
//import { defineConfig } from 'cypress'

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout:10000,
        setupNodeEvents(on, config) {

    }
  }
})
