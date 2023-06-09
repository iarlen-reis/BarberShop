<img src="/public/Images/Template.png" alt="image template">

### BarberShop

<p>
    BarberShop é uma aplicação desenvolvida utilizando React com Typescript,
    estilizada com Styled-components e integrada com o Google Firebase. Ela é
    um site para gerenciamento de barbearia, onde o cliente pode agendar seu
    horário e descrever o serviço que deseja.
</p>

<p>
    A aplicação possui autenticação com e-mail/senha e Google, onde
    o usuário pode se conectar pelo método que preferir, a autenticação é feita
    utilizando Firebase Authentication. Para armazenar os agendamentos dos
    clientes foi utilizado o Cloud Firestore.
<p>
    Além de criar fazer seus agendamentos, o cliente pode verificar os
    serviços agendados e deletá-lo a qualquer momento. O cliente também
    pode filtrar os agendamentos através da situação dele, que pode ser:
    pendente, cancelado ou finalizado.
</p>

## Funcionalidades
- [x] Autenticação com E-mail e Google.
- [x] Deletar conta.
- [x] Agendamento de serviço.
- [x] Cancelar agendamentos de serviço.
- [x] Verificar serviços agendados.
- [x] Filtro agendamentos por status.
- [x] Paginação (9 serviços por página).
- [x] Quantidade de serviços no perfil (pendentes, cancelados e finalizados).
- [x] Testes unitários dos components.
- [x] Responsividade.
- [ ] Painel administrativo (gereciador para o barbeiro).
- [ ] Portfolio de serviços (Serviços do barbeiro).

## Ferramentas

Ferramentas utilizadas no desenvolvimento.

ReactJs <br/>
[@ReactJs](https://www.npmjs.com/package/@reactjs)

TypeScript <br/>
[@TypeScript](https://www.typescriptlang.org/)

Styled Components <br/>
[@Styled-Components](https://styled-components.com/)

Firebase <br/>
[@Firebase](https://firebase.google.com/docs?hl=pt-br)