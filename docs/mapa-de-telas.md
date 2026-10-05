# Mapa de telas do PetVida

## Estrutura de navegação

O sistema terá cinco áreas principais: Visão geral, Agenda, Tutores e pets, Histórico e Lembretes. No computador, a navegação ficará na lateral; no celular, em um menu compacto. A ação Novo agendamento deve estar acessível na visão geral e na agenda.

## Visão geral

Exibir a data selecionada, totais de agendamentos, confirmações pendentes, conclusões e cancelamentos. A lista de próximos atendimentos deve mostrar horário, pet, serviço, profissional e status. Cada item leva ao detalhamento do agendamento.

Estados necessários: agenda com atendimentos, dia sem atendimentos e busca sem resultado.

## Agenda

Exibir atendimentos em ordem de horário com filtros por data, profissional e serviço. Um formulário de novo agendamento deve permitir selecionar pet, serviço, profissional, data e horário. A duração deve aparecer antes de salvar.

Ao detectar um conflito, explicar qual profissional já possui atendimento naquele intervalo e preservar os campos preenchidos. Ao editar, excluir o próprio agendamento da verificação de conflitos.

No detalhe, permitir confirmar, concluir, cancelar ou marcar falta. Cancelar deve solicitar confirmação antes de alterar o registro.

## Tutores e pets

Disponibilizar busca por nome do tutor ou do pet. O cadastro do tutor inclui nome e contato. O cadastro do pet inclui nome, espécie, raça opcional, idade ou data de nascimento opcional e tutor responsável.

O perfil do pet mostra os dados cadastrais, próximos agendamentos e histórico. Campos sem informação devem aparecer como não informados, sem dados inventados.

## Histórico

Apresentar os registros do pet em ordem de data, com serviço, profissional e observações. Permitir acrescentar uma observação ao atendimento, distinguindo informações clínicas de anotações de banho e tosa.

Uma tela sem registros deve explicar que o histórico ficará disponível após os primeiros atendimentos.

## Lembretes

Listar confirmações pendentes e retornos preventivos registrados. Apresentar uma prévia da mensagem e uma ação claramente identificada como simulação. A interface deve informar o resultado da simulação sem indicar envio real.

Retornos devem depender de uma data registrada no atendimento; o sistema não deve recomendar datas clínicas por conta própria.

## Fluxo principal

Recepção cadastra tutor → cadastra pet → seleciona serviço e profissional → escolhe horário → sistema verifica disponibilidade → salva atendimento → recepção acompanha confirmação → profissional registra conclusão e observações → registro aparece no histórico do pet.

## Direção visual proposta

Usar fundo claro, verde como cor principal, texto escuro e superfícies com bordas discretas. Priorizar leitura e contraste. Status devem combinar texto e cor. Ícones precisam de rótulos acessíveis, e botões devem ter áreas de toque adequadas ao celular.

As telas devem comunicar proximidade e cuidado, preservando espaço para a informação operacional. Fotografias e elementos decorativos não devem competir com a agenda.
