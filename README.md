# Breaking Bad

Aplicação com a listagem de personagens da série Breaking Bad. Aplicação consumindo a API disponível em https://breakingbadapi.com/documentation

</br>

### Tecnologias

- React (CRA)
- Typescript
- Webpack
- Scss
- Jest
- React Testing Library
- React-query
- Axios
- Reach router

### Desenvolvimento

Utilize o comando `yarn start` para abrir a aplicação em modo de desenvolvimento. A aplicação irá abrir automaticamente em `http://localhost:3000/`. O aplicativo automaticamente se atualiza com cada modificação nos arquivos.
</br>

### Build

Utilize o comando `yarn build` para fazer o build do projeto. Os artefatos serão gerados no diretório `build/`. Durante o processo de deploy será necessário indicar esse diretório para efetuar o processo corretamente.
</br>

### Testes unitários

Utilize o comando `yarn test` para executar todos testes unitários da aplicação. Toda atualização nos arquivos irá iniciar os teste novamente.
</br>

### \*\*Desafios

Para esse projeto tive a ideia de fazer um infinite scroll para mostrar os personagens mais dinamicamente. Criei o detalhamento do personagem através de rotas para conseguir acessar via id na URL da rota, facilitando assim o compartilhamento. Usei React Query para gerir todas a chamadas de serviço, no qual trata error, loading e retries quando é gerado erro pela API.

#### Próximos passos

- Renderizar os detalhes de personagem em apenas uma modal. São poucos os detalhes de cada personagem para ter uma rota inteira apenas pra isso;
- Aumentar a cobertura de testes unitários;
- Melhorar layout (telas, animações);
  </br>
