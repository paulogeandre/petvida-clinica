# Briefing do sistema PetVida

## Objetivo

Organizar os agendamentos e os registros dos animais da Clínica PetVida em um sistema web responsivo. A solução deve ajudar a recepção a evitar conflitos de horários, acompanhar confirmações e localizar rapidamente o histórico de cada pet.

## Contexto do cliente

A PetVida oferece consultas veterinárias, vacinação, pequenas cirurgias, banho e tosa. A clínica utiliza uma agenda de papel e arquivos físicos. Com mais de 30 banhos diários e consultas sobrepostas, enfrenta atrasos, faltas de tutores e dificuldade para consultar registros.

A equipe é composta pelos dois sócios veterinários, dois veterinários plantonistas, três tosadores e duas recepcionistas. O diferencial da clínica é a relação de confiança com os tutores e a possibilidade de integrar cuidados estéticos e de saúde.

## Decisão de design

Um sistema web responsivo permite usar a mesma solução no computador da recepção e em dispositivos móveis. A interface deve priorizar agenda, busca de pets e ações rápidas. Um site apenas institucional não resolveria os problemas operacionais apresentados.

## Usuários e necessidades

| Usuário | Necessidade principal |
| --- | --- |
| Recepção | Cadastrar tutores e pets, agendar serviços e acompanhar confirmações |
| Veterinários | Consultar registros do animal e registrar atendimentos |
| Tosadores | Consultar a agenda e registrar a conclusão dos serviços |
| Sócios | Acompanhar atendimentos, cancelamentos e ocupação da agenda |

No protótipo inicial, esses papéis orientam as telas. Autenticação e permissões reais exigem uma etapa adicional de implementação.

## Escopo da primeira entrega

1. Painel com atendimentos do dia e indicadores calculados a partir dos registros.
2. Agenda com filtros por data, serviço e profissional.
3. Criação e edição de agendamentos, verificando conflitos para o mesmo profissional.
4. Cadastro de tutores e pets, mantendo o vínculo entre ambos.
5. Perfil do pet com histórico de atendimentos e observações.
6. Mudança de status entre pendente, confirmado, concluído, cancelado e falta.
7. Área de lembretes com demonstração de confirmação e retorno preventivo.

## Regras propostas

- Cada agendamento deve ter pet, serviço, profissional, data, hora de início e duração.
- Serviços devem ser associados a profissionais compatíveis com a função.
- Agendamentos ativos do mesmo profissional não podem ter intervalos sobrepostos.
- Cancelamentos e faltas permanecem no histórico; cancelamentos liberam o horário.
- Um tutor pode ter vários pets, e cada pet deve possuir um tutor responsável.
- Registros de saúde devem indicar data e profissional responsável.
- Indicadores devem refletir os dados exibidos, sem números fixos usados como resultados reais.

As durações dos serviços, o horário de funcionamento e a disponibilidade dos profissionais não constam no estudo de caso. Valores usados na demonstração devem ser identificados como escolhas do protótipo e permitir ajustes futuros.

## Limites da demonstração

A primeira versão deve usar dados fictícios. Se usar armazenamento local no navegador, deve informar que os registros ficam naquele dispositivo e oferecer uma forma explícita de restaurar os dados de exemplo. O envio de mensagens será demonstrado sem afirmar que uma mensagem foi entregue. Uso real exige backend, autenticação, controle de acesso, cópias de segurança e integração de mensagens.

## Critérios de aceite

- É possível cadastrar um tutor, cadastrar seu pet e criar um agendamento vinculado a ele.
- A agenda impede a criação de dois atendimentos simultâneos para o mesmo profissional.
- Atendimentos adjacentes, em que um termina quando o outro começa, são permitidos.
- Alterar o status de um atendimento atualiza a agenda e os indicadores relacionados.
- É possível localizar um pet e consultar seus registros.
- A interface funciona em telas de computador e celular, com campos rotulados e navegação por teclado.
- O README explica o problema, a decisão de design, as telas, a arquitetura, a execução e as limitações.
- O repositório contém .gitignore e LICENSE, sem credenciais ou dados pessoais reais.

## Entrega acadêmica

Nome proposto do repositório: petvida-clinica.

O enunciado informa prazo em 5 de outubro de 2026 às 23h59 e atribui 1,0 ponto à resolução da dor, decisão de design e protótipo, e 1,0 ponto à estrutura profissional do repositório. A entrega deve incluir o link do GitHub e uma aplicação executável, com instruções claras de acesso e execução.

Fonte: Estudo de Caso 5 Clínica PetVida e Estética Animal, fornecido pelo usuário.
