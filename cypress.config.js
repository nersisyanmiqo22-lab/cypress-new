const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    chromeWebSecurity: false,
  },
});