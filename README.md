# Aplicativo de Previsão do Tempo

Este é um aplicativo de previsão do tempo para dispositivos móveis desenvolvido em React Native.

## Sumário:
- [Funcionalidades](#funcionalidades)
- [Pré-requisitos](#pré-requisitos)
- [Instalação e Configuração](#instalação-e-configuração)

---

### Funcionalidades:

- Visualização da situação climática atual e da previsão para os próximos dias.
- Suporte para amostragem do clima de várias cidades.
- Cores e imagens dinâmicas que expressam as condições climáticas atuais.
- Verificação da validade da chave de API recebida: a aplicação alertará o uso de uma chave inadequada e utilizará dados de teste quando isso ocorrer.

---

### Pré-requisitos:

- O [Nodejs](https://nodejs.org/en) é necessário para rodar o ambiente javascript utilizado pela aplicação.
- Tenha um gerenciador de pacotes javascript à disposição, recomenda-se o uso do [Yarn](https://yarnpkg.com/).
- O [Expo](https://expo.dev/) deve estar instalado em seu dispositivo móvel, por meio de uma loja de apps ([Apple Store](https://www.apple.com/br/app-store/), [Play Store](https://play.google.com/store)).

---

### Instalação e Configuração:

1. Utilizando um ambiente de versionamento de software de sua preferência, faça um clone deste projeto.
2. Estando em um terminal cujo caminho corresponda ao clone deste projeto, execute o comando `yarn install` para instalar as dependências utilizadas.
3. Acesse o domínio [Api](https://console.hgbrasil.com/keys) e copie uma chave disponível para uso na coluna `Chave` da tabela exibida na página acessada.
4. Vá até o arquivo `index.js` no diretório `./src/infra/index.js` e insira a chave copiada no objeto de criação da api em `params.key`, como na imagem:
> ![image](https://user-images.githubusercontent.com/68082947/236066436-e761ad8c-4206-4fb3-aa1c-052989daa402.png)
5. Utilize o comando `yarn expo start` para rodar o projeto.
6. Inicie o aplicativo Expo.
7. Selecione a opção de escanear e escaneie o QR code
---

**Tudo pronto pra testar o app ^-^**


