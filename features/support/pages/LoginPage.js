export default class LoginPage {
    constructor(page) {
        this.page = page
        this.username = '#user-name'
        this.password = '#password'
        this.loginButton = '[data-test="login-button"]'
        this.url = 'https://www.saucedemo.com'
    }
    // Funções que interagem com os elementos da página
    async login(username, password) {
        await this.page.fill(this.username, username)
        await this.page.fill(this.password, password)
        //await this.page.click(this.loginButton)
    }

        async clicar_no_botao_login() {
            await this.page.click(this.loginButton)
    }

}