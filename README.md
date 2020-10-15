# happy
Projeto desenvolvido durante a 3° edição da Neext Level Week

## Baixar projeto
  ```bash
  # Clone este repositorio
  $ git clone https://github.com/michaelfarias/happy.git

  ```

## Iniciando o expo
  ```bash
  
  #Instale o expo
  $ yarn add global expo-cli
  ou
  $ npm install -g expo-cli
  
  # Caso o expo não esteja disponível, execute
  $ source ~/.bash_profile
  
  # Caso não exista o arquivo acima, crie
  $ nano ~/.bash_profile
  
  # Coloque o seguinte comando,salve e feche, e repita o comando 'source' anterior
  export PATH=$PATH:$(yarn global bin)
  
  ```
  
## Iniciando o mobile
  ```bash
  
  # Entre na pasta mobile
  $ cd Trilha\ OmniStack/mobile/
  
  # Instale as dependências
  $ yarn install
  
  # Para executar o projeto
  $ yarn start
  
  # Caso tenha problemas como (System limit for number of file watchers reached...), execute
  $ echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p
  
  # Ou às vezes pode precisar de iniciar o projeto como administrador
  $ sudo yarn start
  
  ```
