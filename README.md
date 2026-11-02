# Saúde 60+ | Hidratação

MVP acadêmico para acompanhar o consumo de água de pessoas idosas, familiares e cuidadores, em alinhamento ao ODS 3 — Saúde e Bem-Estar. Organização de medicamentos é o escopo anterior e não descreve o aplicativo atual.

## Estado atual

Há uma implementação de hidratação em `index.html` e `app.js` na branch `main`. **Implementação existente não significa validação concluída.** Esta descrição resulta de inspeção do código em 02/11/2026; não comprova testes em navegador, acessibilidade ou validação com usuários.

## Funcionalidades implementadas no código

- Registro de água em mL: números inteiros de 1 a 3000 por lançamento.
- Data local e horário do dispositivo preenchidos automaticamente no registro.
- Lista dos registros de hoje e soma do consumo diário.
- Persistência do peso e dos registros em `localStorage`, na chave `saude60-hidratacao-v1`.
- Cálculo de referência inicial pelo peso: valor arredondado de peso × 30 mL/dia, com peso de 20 a 300 kg.
- Progresso percentual limitado visualmente a 100%, mantendo o total consumido em mL.
- Exclusão de todos os registros de hoje mediante confirmação; registros de outros dias permanecem armazenados.
- Mensagens de estado, rótulos associados aos campos e regiões de anúncio acessível no HTML.

Sem peso informado, o aplicativo mostra o total e solicita o cálculo da referência; não classifica o consumo como suficiente ou insuficiente.

## Limitações e pendências

- Não há edição ou exclusão individual, seleção de data/hora nem consulta de dias anteriores na interface.
- O dia é calculado pelo relógio local. A atualização automática da tela na virada do dia precisa ser verificada.
- O armazenamento é local ao navegador e à origem do site: não há contas, autenticação, servidor, backup ou sincronização entre dispositivos ou endereços de publicação.
- Limpar os dados do navegador pode apagar os registros. Não há notificações externas.
- Falhas de gravação exibem mensagem; falhas de leitura retornam estado vazio sem aviso específico no código atual. Esse comportamento precisa de revisão e teste.
- A existência de recursos de acessibilidade no HTML não comprova conformidade. Teclado, foco, contraste, área de toque, leitor de tela, largura de 320 px e ampliação a 200% ainda precisam de verificação documentada.

## Referência de consumo e uso demonstrativo

O código atual calcula automaticamente uma referência de 30 mL/kg/dia. Isso difere do planejamento anterior, que previa meta explícita sem cálculo pelo peso; a decisão de manter ou revisar essa regra permanece pendente de revisão.

Essa referência não é prescrição nem meta universal. A interface informa que necessidades individuais variam e orienta seguir a equipe de saúde em caso de restrição de líquidos, doença renal ou cardíaca. O protótipo não substitui orientação profissional.

**Demonstrações e testes devem usar exclusivamente dados fictícios**, inclusive peso e volumes. Não inserir dados pessoais reais ou sensíveis, especialmente em dispositivos compartilhados. Armazenamento local não equivale a proteção de dados ou autenticação.

## Como executar

Mantenha `index.html`, `style.css` e `app.js` na mesma pasta e abra `index.html` no navegador. No VS Code, pode-se usar o Live Server. Para avaliar persistência, repita o teste no mesmo navegador e endereço.

## Validação ainda pendente

Executar e registrar testes de entradas inválidas, soma diária, persistência após recarga, exclusão confirmada e cancelada, mudança de dia e falhas de armazenamento. Não há resultados desses testes apresentados nesta atualização documental.

Realizar avaliação inicial com ao menos um representante externo ao desenvolvimento, apenas com dados fictícios:

| Tarefa | Resultado esperado | Critério |
| --- | --- | --- |
| 1. Localizar Hidratação | Localizar o formulário sem instrução de navegação | Até 30 segundos, sem ajuda |
| 2. Registrar consumo | Adicionar 200 mL fictícios e localizar o registro com data/hora automáticas | Até 60 segundos, sem ajuda ou duplicação |
| 3. Interpretar o resultado | Adicionar 150 mL, identificar o total de 350 mL e explicar a mensagem | Até 60 segundos, sem ajuda e sem interpretar como orientação clínica |

Registrar commit, dispositivo, navegador, sucesso, tempo, erros, ajuda, dificuldades de acessibilidade e satisfação de 1 a 5, sem identificar pessoalmente o participante.

Aprovar a validação inicial somente se as três tarefas atenderem aos critérios, a satisfação for pelo menos 4 em cada uma e não houver bloqueio de acessibilidade. Se houver falha, corrigir e repetir as tarefas afetadas. Uma avaliação inicial não permite generalizar resultados para toda a população idosa.

## Próximas etapas

1. Revisar a regra de referência pelo peso e as diferenças em relação ao planejamento.
2. Executar testes funcionais e de acessibilidade e registrar evidências associadas ao commit.
3. Realizar as três tarefas com representante externo e registrar resultados.
4. Priorizar edição/exclusão individual e consulta por dia, sem apresentá-las como já entregues.

A aprovação da documentação não certifica validação funcional, acessibilidade ou uso clínico.
