# Testes de Performance com JavaScript e K6

Repositório:
[banco-api-perfomance](https://github.com/ilanaalc/banco-api-perfomance/tree/main)

## 🧩 Introdução

Este projeto tem como objetivo realizar testes de performance automatizados com **[K6](https://k6.io/)**, uma ferramenta moderna e
eficiente para testes baseados em JavaScript.\
Os testes simulam cenários reais de uso da API do sistema bancário,
avaliando métricas como tempo de resposta, taxa de erro, throughput e
comportamento sob diferentes níveis de carga.

## 🧰 Tecnologias Utilizadas

-   **JavaScript (ES6+)** --- linguagem base dos scripts de teste\
-   **K6** --- ferramenta de testes de performance\
-   **VS Code** (opcional) --- ambiente de desenvolvimento recomendado

## 📂 Estrutura do Repositório

    banco-api-perfomance/
    ├── config/                # Arquivo de configuração de variáveis de ambiente
    │   ├── config.local.json
    ├── fixtures/                # Dados de entrada para os testes (ex:usuários, payloads)
    │   ├── posLogin.json     
    ├── helpers/                # Funções utilitárias reutilizáveis
    |   ├── autenticacao.js  
    ├── tests/                # Casos de teste organizados por módulo da API
    │   ├── login.test.js
    │   ├── transferencia.test.js
    ├── utils/                # Funções utilitárias reutilizáveis para a interação com a API
    │   ├── variaveis.js
    ├── .gitignore
    └── README.md

### 🗂️ Objetivo de cada grupo de arquivos

-   **`config/`**: Arquivo de configuração de variáveis de ambiente.\
-   **`fixtures/`**: Dados de entrada para os testes (ex:usuários, payloads).\
-   **`helpers/`**: Funções utilitárias reutilizáveis.\
-   **`tests/`**: Casos de teste organizados por módulo da API.\
-   **`utils/`**: Funções utilitárias reutilizáveis para a interação com a API.\

## ⚙️ Modo de Instalação

1.  **Clonar o repositório:**

    ``` bash
    git clone https://github.com/ilanaalc/banco-api-perfomance.git
    cd banco-api-perfomance
    ```

2.  **Configure as variáveis de ambiente:**

    Altere o arquivo `config.local.json` e defina a URL base da API a ser testada:

    ```json    
    BASE_URL=http://localhost:3000
    ```


3.  **Verificar se o K6 está instalado:**

    ``` bash
    k6 --version
    ```

    Caso não esteja, siga as instruções em:
    <https://k6.io/docs/get-started/installation/>

## 🚀 Modo de Execução

Os testes devem ser executados definindo a variável de ambiente
**BASE_URL**, que indica a URL base da API a ser testada.

### 🧪 Exemplo de execução padrão:

``` bash
k6 run tests/login.test.js -e BASE_URL=http://localhost:3000
```

### 📊 Execução com relatório em tempo real (dashboard):

``` bash
K6_WEB_DASHBOARD=true k6 run tests/login.test.js
```

Após a execução, acesse o dashboard em tempo real no navegador
utilizando o link exibido no terminal.

### 💾 Exportação do relatório em formato HTML:

``` bash
K6_WEB_DASHBOARD=true K6_WEB_DASHBOARD_EXPORT=html-report.html k6 run tests/login.test.js
```

O relatório será salvo no diretório especificado (por padrão na raiz do
projeto).
