import { defineConfig } from 'cypress'

export default defineConfig({
  projectId: "jcpvbn",
  e2e: {
    baseUrl: 'http://localhost:5173', // o tu URL
    setupNodeEvents(on, config) {
      // aquí puedes enganchar plugins si los necesitas
    },
  },
})