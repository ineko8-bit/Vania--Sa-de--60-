# Saúde 60+

MVP acadêmico de saúde digital para pessoas idosas, familiares e cuidadores. O objetivo definido para a próxima versão é apoiar o acompanhamento do consumo de água por uma interface simples e acessível, em alinhamento ao ODS 3 — Saúde e Bem-Estar.

## Estado atual e mudança de escopo

O protótipo existente foi descrito originalmente como organizador de medicamentos e horários, com cadastro, consulta e avisos textuais. Esse é o escopo anterior; a próxima versão terá foco no registro de água, e não no gerenciamento de medicamentos.

**As funcionalidades de hidratação ainda não estão implementadas nem validadas.** Este PR atualiza somente a documentação. Sua aprovação não comprova a entrega funcional do novo MVP.

## Funcionalidades planejadas de hidratação

- Localizar a função Hidratação em uma interface responsiva e acessível.
- Registrar volume de água em mL e data/hora do consumo.
- Consultar registros e total diário.
- Corrigir ou excluir um registro e preservar os dados ao recarregar.
- Exibir progresso somente quando houver uma meta configurada; sem meta, mostrar apenas o total consumido.

O escopo, os critérios de aceite e as três tarefas de validação estão em [Proposta de hidratação](docs/proposta-hidratacao.md).

## Como executar o protótipo atual

Abra `index.html` no navegador. O fluxo de hidratação descrito acima depende de implementação futura em outro PR.

## Limitações

Protótipo demonstrativo, com armazenamento local neste navegador. Não envia notificações externas, não substitui orientação profissional e não deve receber dados reais sensíveis em computadores compartilhados. Os testes devem usar exclusivamente dados fictícios.

Não existe meta universal automática de consumo de água neste planejamento. Metas e alertas devem seguir as regras da proposta antes de serem desenvolvidos.

## Próximas etapas

1. Revisar e integrar a documentação do novo escopo.
2. Implementar o fluxo mínimo de hidratação em PR separado, incluindo testes e evidências.
3. Executar a validação com três tarefas e registrar os resultados antes de declarar o MVP de hidratação concluído.

## ODS

ODS 3 — Saúde e Bem-Estar.
