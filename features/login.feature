#language: pt
Funcionalidade: Login no SauceDemo
    Realizar o login no site www.saucedemo.com
        
    Esquema do Cenario: Login com Sucesso
        Dado que estou na pagina de Login
        Quando preencho o "<usuario>" e a "<senha>"
        E clico em Login
        Entao Vou para a pagina "<url>" e vejo "<titulo_secao>"
        Exemplos:
        | usuario       | senha        | url       | titulo_secao |
        | standard_user | secret_sauce | inventory | Product      |
        | visual_user   | secret_sauce | inventory | Product      |

    # Cenario: Login com Sucesso
    #     Dado que estou na pagina de Login
    #     Quando preencho o usuario "standar_user" e a senha "secret_sauce"
    #     E clico em Login
    #     Entao Vou para a pagina Inventory