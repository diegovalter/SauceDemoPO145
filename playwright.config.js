import { defineConfig } from "playwright/test"

export default defineConfig({
    testDir: './features', // diretório onde estão os arquivos .feature
    timeout: 30000,
    retries: 1,
    use: {
        baseURL: 'https://www.saucedemo.com',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    }
})