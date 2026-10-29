# Saúde 60+ — Planejamento da migração para hidratação

## Objetivo e estado

Migrar o foco do MVP Saúde 60+ de organização de medicamentos para acompanhamento do consumo de água por pessoas idosas, familiares e cuidadores, em alinhamento ao ODS 3 — Saúde e Bem-Estar.

Este documento define planejamento e critérios de aceite. **O fluxo de hidratação ainda não está implementado nem validado.** A aprovação deste PR refere-se à documentação; a entrega funcional depende de outro PR e de evidências de teste.

## Escopo da primeira implementação

- Interface responsiva com acesso claro à função Hidratação.
- Registro de volume em mL e data/hora do consumo.
- Histórico por dia e soma dos volumes do dia selecionado.
- Edição e exclusão de registros, com atualização imediata do total.
- Persistência local no navegador e mensagens claras de sucesso ou erro.
- Uso exclusivo de perfil e registros fictícios na demonstração e nos testes.

Gerenciamento de medicamentos deixa de ser o objetivo da próxima versão. Contas, sincronização entre dispositivos e notificações externas ficam fora desta primeira implementação.

## Critérios de aceite funcional

1. Volume aceita somente número finito maior que zero em mL; campos vazios, zero, negativos e texto são rejeitados com mensagem junto ao campo, sem salvar o registro.
2. Data e hora são obrigatórias e válidas. O agrupamento diário usa a data local do dispositivo; não há reinício destrutivo do histórico na virada do dia.
3. Salvar uma vez cria um único registro. Salvar, editar ou excluir recalcula o total do dia afetado sem duplicação.
4. Recarregar a página mantém os registros. Falhas de leitura ou gravação do armazenamento produzem mensagem acessível e não informam sucesso indevidamente.
5. O histórico vazio informa que ainda não há registros. A exclusão exige confirmação e mantém o registro se cancelada.
6. Testes cobrem entradas inválidas, soma diária, edição, exclusão, recarga, mudança de dia e falha de armazenamento.

## Metas, progresso e mensagens

A primeira entrega pode funcionar apenas com total diário, sem meta. Quando houver meta, ela deverá ser informada explicitamente para a demonstração fictícia; não será calculada automaticamente pelo peso. O progresso corresponde ao total diário dividido pela meta, em porcentagem, acompanhado dos valores em mL. Totais acima da meta devem continuar visíveis sem sugerir que a pessoa beba mais.

A referência de 30 mL/kg/dia permanece apenas como hipótese de estudo, nunca como recomendação universal ou regra automática do aplicativo. Metas individuais dependem de orientação profissional.

As mensagens serão informativas, como confirmação de registro e atualização do total. Não haverá diagnóstico, prescrição ou alerta clínico. Sem meta configurada, a interface não deve classificar o consumo como suficiente ou insuficiente.

## Acessibilidade verificável

- Rótulos persistentes associados aos campos e unidade mL explícita.
- Controles com área de toque mínima de 44 × 44 pixels CSS.
- Operação completa por teclado, ordem de foco coerente e foco visível.
- Contraste mínimo de 4,5:1 para texto comum e 3:1 para texto grande.
- Erros e resultados compreensíveis sem depender apenas de cor, com anúncio acessível das atualizações.
- Sem perda de conteúdo ou de funções em largura de 320 pixels CSS e com ampliação de texto a 200%.

## Dados e limitações

Usar apenas dados fictícios, sem solicitar nome completo, documento, diagnóstico ou outros dados pessoais de saúde. O armazenamento local é demonstrativo, não constitui autenticação nem sincronização. Documentar que limpar os dados do navegador remove os registros e que não se deve inserir dados reais sensíveis em dispositivos compartilhados.

## Validação com três tarefas

Executar com ao menos um representante externo ao desenvolvimento, usando somente dados fictícios. Registrar dispositivo, navegador e versão/commit testado, sem identificar pessoalmente o participante.

| Tarefa | Resultado esperado | Critério previamente definido |
| --- | --- | --- |
| 1. Localizar Hidratação | Abrir o formulário sem instrução de navegação | Concluir em até 30 segundos, sem ajuda |
| 2. Registrar consumo fictício | Salvar 200 mL com data/hora válidas e localizar o registro | Concluir em até 60 segundos, sem ajuda ou duplicação |
| 3. Interpretar o resultado | Após um registro adicional de 150 mL no mesmo dia, identificar 350 mL e explicar a mensagem exibida | Concluir em até 60 segundos, sem ajuda e sem interpretar a mensagem como orientação clínica |

Após cada tarefa, registrar sucesso, tempo, erros, ajuda necessária, dificuldades de acessibilidade e satisfação de 1 a 5.

Regra de decisão: aprovar a validação inicial somente se as três tarefas atenderem aos critérios, a satisfação for pelo menos 4 em cada uma e não houver bloqueio de acessibilidade. Se falhar, corrigir e repetir as tarefas afetadas. Essa amostra é uma avaliação inicial, sem generalizar os resultados para toda a população idosa.

## Evidências para o PR de implementação

- Checklist dos critérios funcionais e de acessibilidade com resultados reais.
- Resultado dos testes, incluindo casos inválidos e persistência.
- Capturas do fluxo e registro anonimizado das três tarefas.
- Limitações conhecidas e identificação do commit validado.

Somente após implementação, testes e validação registrados o README poderá apresentar hidratação como entregue. Até lá, manter a distinção entre protótipo anterior e funcionalidades planejadas.
