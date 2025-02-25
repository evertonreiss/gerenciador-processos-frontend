# Veredictum - Frontend do Gerenciador de Processos

Veredictum é o frontend desenvolvido com **Quasar Framework** para gerenciar processos e seus tipos. Ele consome APIs de microserviços para realizar operações como **cadastrar, editar, visualizar e excluir** processos e tipos de processos.

## Tecnologias Utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [Vue.js](https://vuejs.org/) - Framework JavaScript progressivo
- [Quasar Framework](https://quasar.dev/) - Framework baseado em Vue para desenvolvimento web e mobile
- [Vue Router](https://router.vuejs.org/) - Gerenciamento de rotas no Vue
- [Pinia](https://pinia.vuejs.org/) - Gerenciamento de estado moderno para Vue
- [Axios](https://axios-http.com/) - Cliente HTTP para consumir APIs
- [dotenv](https://www.npmjs.com/package/dotenv) - Gerenciamento de variáveis de ambiente
- [QCurrency](https://quasar.dev/) - Componente de input de moeda no Quasar

## Configuração e Execução

### 1️⃣ **Pré-requisitos**
Antes de rodar o projeto, certifique-se de ter instalado:

- **Docker**
- **Docker Compose**

### 2️⃣ **Clonar o Repositório**
```sh
git clone https://github.com/evertonreiss/gerenciador-processos-frontend.git
cd gerenciador-processos-frontend
```

### 3️⃣ **Executando com Docker Compose**
```sh
docker-compose up --build -d
```

O projeto será iniciado e estará acessível em **http://localhost:9090**.

---

## Funcionalidades

* ✅ Cadastrar, editar e excluir **tipos de processos**
* ✅ Cadastrar, editar e excluir **processos**
* ✅ Listar processos e tipos de processos
* ✅ Interface responsiva e otimizada

---

## Comandos Úteis

Rodar o projeto em modo de desenvolvimento:
```sh
quasar dev
```

Gerar build para produção:
```sh
quasar build
```

Executar lint para verificar erros de código:
```sh
npm run lint
```

## Contato e Contribuição

Sinta-se à vontade para contribuir com o projeto! Para sugestões, melhorias ou problemas, entre em contato ou abra uma issue no repositório.

