<h1 align="center">
    <img src="https://lh3.googleusercontent.com/Zom4SBU6vNB085llQ3_IiyMRYdG8LXJQkdY0igoRCsEBmaXqbSSTOl6w2e5Zk2dYIOLuHzr7VTiJigCGH0JbnwsNevbhZzPXW-IDXI67nVrOQD30MdSsK78FRghEjWrDDLqFjgGCix4gvlteB5lYHsd8obUcqtjy4uj-kGOtvaDc-k0gmwZWAZP5-tD__ts07y-a97fKaVxBlh3FJNAKm5bccYjtHr1-cdotp3SJ3Ap72tqkQDhz2YfKcK07tTLjbO2G59VVQ2VsbrducdGtUVorVi3SlXfjlZUwEfPjFTuABAyWLwl_CVZcfe3MBjJahjVU4kJSzsjyzy0we8rq-0B9xo2BLcLUvH6DKMmtJ_mp68SuwqzUfK9XDvXaBnRiTVvRRX9wvshI5ZGw8vwzYyv8V8zT6E7cvAE3kAp0piwdVRyyKsnNyyVOqQYbMjG6yxUUm7aRocrUWq2XKwH5SQyrZQ3_IPILkj_P-zdfRkZv2jUjJz7B28GG-AJKov69uvHnkw9sNrAvPQ_fBg1gy85kYQ_sM81fhFt6hFV2KXFkwG7OmKrNyWmD8mjBs5g2uTkry7effjnJS80YblaswulTCslaYO2VF55_W6pkhCf9SZAp3XY56k1MWvXqESIhd2xd-MAe9rlvBM4suumXR_repeBduSAd_s0Y_i-XBa4NdT452szLUtVr3FQLIRNzDmij7Gme2FGX0pZ0zPFcuTD14VDFD2Ta4c93e0pMGv_QioSRoVfq0IEbHPc=w1016-h594-no?authuser=0" alt="quatro pessoas refugiadas, dois homens carregando malas, uma mulher e uma criança, um escrito chamado Capacitação Refugiados aparece acima da imagem" width="500">
<p align="center">CapacitacaoRefugiados - cursos de capacitação para refugiados<p>
</h1>
  
  # :purple_heart: {reprograma} Projeto Final  - CapacitacaoRefugiados
  Projeto de conclusão do bootcamp de desenvolvimento Back-end da [{reprograma}](https://reprograma.com.br/) - Todas em Tech.
  
  <p align="center">
  
  Aplicação disponível [aqui](https://capacitacaorefugiados.herokuapp.com/) :purple_heart: 
  <p>
  
  ## Objetivos
  
Segundo [matéria da CNN Brasil](https://www.cnnbrasil.com.br/nacional/pesquisa-conseguir-emprego-e-a-maior-dificuldade-de-refugiados-no-brasil/#:~:text=Conseguir%20emprego%20%C3%A9%20a%20maior%20dificuldade%20de%20refugiados%20no%20Brasil%2C%20diz%20pesquisa,-Levantamento%20da%20ONG&text=Uma%20pesquisa%20realizada%20pela%20ONG,66%25%20dos%20refugiados%20no%20Brasil.), uma pesquisa realizada pela ONG Estou Refugiado, em parceria com o Instituto Qualibest, aponta que o desemprego ou a dificuldade para encontrar trabalho são os principais problemas enfrentados por 66% dos refugiados no Brasil. Muitos migrantes possuem formação, contudo, não conseguem revalidar seus diplomas quando chegam ao Brasil. Esse é um dos motivos pelos quais os cursos de capacitação são tão importantes. Pessoalmente, tive algumas experiências com relação ao tema de refúgio, essa foi a razão para a construção de uma *API* com banco de dados que contém cursos de capacitação para refugiados que querem aprimorar seus conhecimentos e adentrarem o mercado de trabalho brasileiro. A *API* criada possibilita que essas pessoas se cadastrem e incluam novos cursos no banco de dados, gerando uma lista de cursos. 
  
  
  ### Funcionalidades:
  
  - [x] O schema do cadastro de usuários na API deve conter: id (autogerado), nome,  e-mail e senha;
  - [x] O schema dos cursos na API deve conter: id (autogerado), título, descrição e categoria;
  - [x] A API deve permitir o cadastro de alguém que queira atualizar, deletar ou criar um novo curso;
  - [x] A API deve permitir a visualização dos cursos cadastrados;
  - [x] A API deve permitir alterações nos cursos;
  - [x] A API deve permitir a exclusão de usuários e cursos do banco de dados.
  - [x] A API deve permitir a atualização no cadastro de um usuário;
  - [x] Criação de usuário e login para usuários com acesso sem restrição;
  
  
  ### Instalação
  
  ```bash
  # Clonar o repositório
  $ git clone https://github.com/ninaportoc/reprograma-capacitacaorefugiados
  
  # Entrar na pasta do repositório
  $ cd capacitacaorefugiados
  
  # Instalar as dependências
  $ npm install
  
  # Executar o servidor
  $ npm start
  
  ```
  Caso esteja utilizando outro gerenciador de pacotes apenas altere o npm para seu respectivo instalador.
  
  
  #### Tecnologias e pacotes utilizados
  - Node.js
  - MongoDB
  - Git
  - Mongo Atlas
  - Heroku
  - express
  - nodemon
  - dotenv-safe
  - mongoose
  - bcrypt
  - jsonwebtoken
  - jest
  
  
  
  #### Rotas/Endpoints
  
  | Rotas  Usuarios                          |                                                    |
  | ---------------------------------------  | -------------------------------------------------- | 
  | GET/usuario/:id                          | Encontrar um usuário por ID                        |
  | GET/usuario                              | Encontrar todos os usuários                        |
  | PUT/usuario/:id                          | Alterar cadastro de um usuário                     |
  | POST/usuario/cadastrar                   | Cadastrar um usuário                               |
  | POST/usuario/login                       | Realizar login                                     |
  | DELETE/usuario/:id                       | Deletar um usuário                                 |
  
  | Rotas Cursos                             |                                                    |
  | ---------------------------------------  | -------------------------------------------------- | 
  | GET/cursos                               | Acessar aos cursos disponíveis                     |
  | GET/curso/categoria                      | Acessar aos cursos pelsa categoria                 |
  | GET/curso/titulo                         | Acessar aos cursos pelo título                     |
  | GET/curso/:id                            | Acessar um curso específico por ID                 |
  | PUT/curso/:id                            | Realizar alterações em todo o curso                |
  | PATCH/curso/:id                          | Realizar alterações específicas em um curso        |
  | DELETE/curso/:id                         | Deletar um curso                                   |
  
  
  
  ### :computer: Contribua para o nosso projeto!
  
  1. Faça o fork do projeto;
  2. Crie uma branch para realizar suas alterações: `git checkout -b feature/nome-da-nova-branch`
  3. Commit as alterações feitas e abra um pull request
  
  
  ------------

<p align="center">
Desenvolvido com :purple_heart: , README inspirado por [DiversityHUB-API](https://github.com/mflilian/DiversyHUB-API/blob/main/README.md)
</p>

<p align="center">
   <img src="https://i.pinimg.com/originals/0f/7c/ee/0f7cee86fc8fc9574be41f15f7204e03.gif"/>
</p>
