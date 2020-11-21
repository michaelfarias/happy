<h1 align="center" >

  <img alt="Happy" title="Happy" src="/Trilha OmniStack/web/src/images/logo.svg"/>
 
</h1>

<p align="center">
  <a href="#rocket-tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-projeto">Projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-layout">Layout</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-como-contribuir">Como contribuir</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-licença">Licença</a>
</p>

<p align="center">
  <img alt="Happy" src="/Trilha OmniStack/web/src/images/landing.svg" width="35%">
</p>


## Baixar projeto
  ```bash
  # Clone este repositorio
  $ git clone https://github.com/michaelfarias/happy.git

  ```

## Iniciando o backend
  ```bash
  # Entre na pasta backend
  $ cd Trilha\ OnmiStack/backend
  
  # Instale as dependências
  $ yarn install
  ou
  $ npm install
  
  # Para o executar o servidor
  $ yarn dev

  ```

## Iniciando o frontend
  ```bash
  # Entre na pasta web
  $ cd Trilha\ OnmiStack/web
  
  # Instale as dependências
  $ yarn install
  ou
  $ npm install
  
  # Execute o servidor
  $ yarn start
  

  ```


## Iniciando o expo
  ```bash
  
  # Instale o expo
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
