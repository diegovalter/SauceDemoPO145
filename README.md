# 🧪 Automação SauceDemo - BDD & Playwright

Este projeto realiza a automação de testes de login na plataforma **SauceDemo**, utilizando **Playwright** e **Cucumber**. A estrutura foi desenhada seguindo o padrão **Page Object Model (POM)** e foca em escalabilidade, organização de ambiente e relatórios visuais.

---

## 📋 Funcionalidades Automatizadas

### 🔐 Fluxo de Autenticação (Login)

* **Cenário:** Login com diferentes perfis de usuário (Standard, Visual, etc) via **Esquema do Cenário**.
* **Validação:** O robô insere as credenciais, clica no botão de acesso e valida o redirecionamento para a página de inventário e o título "Products".
* **Relatórios:** Geração automática de relatórios em HTML para auditoria dos testes.

---

## 🛠️ Tecnologias Utilizadas

* **Playwright** — Motor de automação (Chromium).
* **@cucumber/cucumber** — Suporte a BDD e Gherkin.
* **cucumber-html-reporter** — Gerador de relatórios visuais estilizados (Bootstrap).
* **JavaScript** — Linguagem principal.

---

## 🏗️ Arquitetura e Ciclo de Vida

Este projeto utiliza **Hooks** para gerenciar o navegador, garantindo que o ambiente seja preparado antes de qualquer teste e encerrado corretamente ao final.

* **BeforeAll:** Inicializa o browser (Chromium), cria o contexto e a página, definindo `global.page` para que todos os steps tenham acesso ao mesmo contexto.
* **AfterAll:** Garante o fechamento do browser, liberando memória e finalizando o processo.
* **Reporters:** Configuração de metadados (Versão, Ambiente, Browser e Plataforma) para relatórios detalhados.

---

## 📁 Estrutura de Pastas

```text
├── features/
│   ├── support/
│   │   ├── steps/      # login.steps.js (Lógica dos passos)
│   │   ├── pages/      # LoginPage.js e InventoryPage.js (POM)
│   │   └── hooks.js    # Setup/Teardown do Browser (BeforeAll/AfterAll)
│   └── login.feature   # Cenários escritos em Gherkin
├── reports/            # Destino dos relatórios (JSON e HTML)
├── generate-report.js  # Script de geração do report visual
├── playwright.config.js # Configurações do Playwright
├── package.json        # Dependências do projeto
└── README.md           # Documentação

```

---

## 🚀 Como Executar o Projeto

1. **Instale as dependências:**
```bash
npm install

```


2. **Rode os testes:**
```bash
npx cucumber-js

```


3. **Gere o Relatório Visual:**
Após a execução, rode o comando abaixo para abrir o relatório no navegador:
```bash
node generate-report.js

```



---

## 💡 Notas de Desenvolvimento

* **Configuração de Browser:** O projeto está configurado para rodar com `headless: false` no `hooks.js`, permitindo visualizar a execução em tempo real.
* **Global Page:** O uso de `global.page` nos hooks simplifica a passagem de instâncias entre os steps, evitando a necessidade de reinicializar o navegador em cada cenário.
* **Relatórios Customizados:** O arquivo `generate-report.js` utiliza o tema `bootstrap` para criar um dashboard profissional que facilita a análise de falhas.
