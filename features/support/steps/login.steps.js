import { Given, When, Then } from '@cucumber/cucumber'
// import { chromium } from 'playwright'
import LoginPage from '../pages/LoginPage.js'
import InventoryPage from '../pages/InventoryPage.js'

//let browser, context, page      // variaveis para o Playwright
let loginPage, inventoryPage     // variaveis para os mapeamentos de 


Given('que estou na pagina de Login', async () => {
    // browser = await chromium.launch ( {headless: false})
    // context = await browser.newContext()
    // page = await context.newPage()
    loginPage = new LoginPage(page) // instanciar o objeto loginPage a partir da classe LoginPage --> Sopro da vida
    inventoryPage = new InventoryPage(page)
    await page.goto('https://www.saucedemo.com')

})

When('preencho o {string} e a {string}', async (usuario, senha) => {
    await loginPage.login(usuario, senha)

})

When('clico em Login', async () => {
     await loginPage.clicar_no_botao_login()

})

Then('Vou para a pagina {string} e vejo {string}', async (url, titulo_secao) => {
    await inventoryPage.verificarPaginaInventario(url, titulo_secao)
    await page.waitForTimeout(2000) //espera bruta de 2s // alfinete
    // await browser.close()

})
