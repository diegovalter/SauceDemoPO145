import { BeforeAll, AfterAll } from "@cucumber/cucumber";
import { chromium } from "playwright";

// Linha do Tempo
// BeforeAll - Before - BeforeStep - Seu Teste - AfterStep - After - AfterAll

let browser, context, page // variaveis do Playwright

BeforeAll(async () => {
    browser = await chromium.launch({headless: false})
    context = await browser.newContext()
    page = await context.newPage()
    global.page = page
})

AfterAll(async () => {
    await browser.close()
    // solução 1 (para encerrar o teste) - trocar browser.close por process.exit(0)
})