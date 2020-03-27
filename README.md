# Semana Omnistack 11 da Rocketseat ministrada pelo Diego Fernandes

## Instruções para utilizar o projeto:

 ## Para utilizar o projeto execute npm install (Para o frontend e o backend).

- 1 rodar npm install
- 2 rodar npm start


 ## Caso encontre erros para executar o servidor do backend ou frontend, execute os passos:

- 0 rodar npm cache clean --force
- 1 Deletar a pasta node_modules
- 2 rodar npm install
- 3 rodar npm start

 ## Mobile:

 ### Editar o arquivo mobile\src\services\api.js

Em:

 ### Por padrão este arquivo está configurado para rodar com o Expo
baseURL: 'http://IP_mostrado_pelo_Expo:19000'

Substitua o baseURL pelo ip mostrado pelo Expo.

 ### Para rodar na rede (IP da máquina):
baseURL: 'http://IP_da_maquina:3333'


