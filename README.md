Circuito Saquarema Verde
Acesso às informações de trilhas e regras ambientais

Desenvolvedor:
Filipe Amaral Gomes Waldhelm

Situação Problema.
Desenvolver um projeto focado em back-end de Acesso às informações de trilhas e regras ambientais que permita aos usuários visualizar e se atualizar das regras e recomendações para os interressados no tema
Descrição das Tecnologias Utilizadas

MVP: Permitir que qualquer pessoa visualize

✔️ Trilhas cadastradas em Saquarema

– Nome
– Descrição
– Dificuldade
– Localização
– Regras ambientais (ex.: não deixar lixo, não usar drone, não acender fogueira)

✔️ Locais importantes relacionados às trilhas

– Pontos turísticos
– Áreas de preservação
– Informações ambientais

✔️ Recomendações ambientais gerais

– Segurança
– Preservação
– Cuidados essenciais

✔️ Painel administrativo simples (somente no frontend)

– Para cadastrar novas trilhas
– Para cadastrar recomendações
– Para cadastrar lugares

Requisitos Funcionais:
🔹 RF01 – Listar trilhas
O sistema deve permitir que o usuário visualize todas as trilhas disponíveis.

🔹 RF02 – Exibir detalhes de uma trilha
O sistema deve mostrar informações detalhadas como: nome, descrição, localização, dificuldade e regras ambientais.

🔹 RF03 – Listar recomendações ambientais
O sistema deve exibir recomendações gerais de segurança e preservação ambiental.

🔹 RF04 – Listar lugares relacionados às trilhas
O sistema deve permitir a visualização de pontos importantes, como áreas protegidas e locais turísticos.

🔹 RF05 – Painel Administrativo
O sistema deve permitir o acesso a uma página administrativa para gerenciamento de conteúdo.

🔹 RF06 – Cadastrar trilhas
O sistema deve permitir ao administrador adicionar novas trilhas através de um formulário.

🔹 RF07 – Cadastrar lugares
O sistema deve permitir ao administrador adicionar novos lugares.

🔹 RF08 – Cadastrar recomendações
O sistema deve permitir ao administrador inserir novas recomendações ambientais.

🔹 RF09 – Atualizar dados (opcional no MVP)
O sistema pode permitir edição de trilhas, lugares ou recomendações.

(Opcional para MVP, mas pode ser listado.)

🔹 RF10 – Excluir dados (opcional no MVP)
O sistema pode permitir exclusão de trilhas, lugares ou recomendações.

🔹 RF11 – Comunicação com o backend
O sistema deve fazer chamadas REST para listar e cadastrar informações.


Requisitos não Funcionais:
🔹 RNF01 – Usabilidade
A interface deve ser simples e fácil de usar, permitindo que visitantes encontrem informações rapidamente.

🔹 RNF02 – Desempenho
As páginas devem carregar informações em até 2 segundos em condições normais de internet.

🔹 RNF03 – Disponibilidade
O sistema deve estar disponível sempre que o servidor estiver ativo.

🔹 RNF04 – Portabilidade
O site deve funcionar em qualquer navegador moderno (Chrome, Edge, Firefox).

🔹 RNF05 – Compatibilidade
O backend deve ser compatível com ferramentas de teste como Postman ou Insomnia.

🔹 RNF06 – Segurança Básica
A área administrativa deve ficar separada da área pública.
(Login completo pode ser adicionado depois.)

🔹 RNF07 – Manutenibilidade
O código deve ser dividido em:

models
controllers
routes
public (frontend)
facilitando atualizações.

🔹 RNF08 – API RESTful
O backend deve seguir o padrão REST, com rotas organizadas e respostas em JSON.

🔹 RNF09 – Armazenamento simples (MVP)
Os dados serão armazenados em JSON interno, sem banco de dados real.

🔹 RNF10 – Extensibilidade
A estrutura deve permitir futura migração para banco de dados (MongoDB, MySQL).


Linguagens utilizadas :JavaScript (Node.js), JSON, HTML, CSS e ENV
