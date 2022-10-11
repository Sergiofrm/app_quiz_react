/* Questoes para adicionar */

const data = [
  {
    category: 'SEPARAÇÃO',
    questions: [
      {
        question:
          'O sistema FEFO (First Expire, First Out) é um termo utilizado na areá de logística para...?',
        options: [
          'Método que coloca os produtos com prazo de validade mais próximo na prioridade de saída.',
          'Controle de entrada e saída de materiais de insumos.',
          'Relaciona o tipo de produto a ser controlado ou ao tipo de apuração do valor investido no estoque.',
          'Sistema de Gestão de Processo Internos realizado pelo Líder: Anderson Germano.'
        ],
        answer:
          'Método que coloca os produtos com prazo de validade mais próximo na prioridade de saída.'
      },

      {
        question:
          'Como realizar a finalização do recebimento na transação ZAGE_005?',
        options: [
          'Entrar na transação, informando centro/pedido e nota fiscal, e clicar na opção recebimento,',
          'MIGO/MIRO',
          'Não se faz a finalização pela ZAGE_005, o correto é realizar a finalização pela ZAGE_007',
          'Não tem como realizar a finalização do recebimento, somente o setor RMS realiza essa tratativa.'
        ],
        answer:
          'Não se faz a finalização pela ZAGE_005, o correto é realizar a finalização pela ZAGE_007'
      },
      {
        question: 'Como funciona o simulador de cubagem?',
        options: [
          'Verifica a quantidade de remessas pendentes para início de uma rota prioritária.',
          'Calcula a quantidade simulada do pedido e soma com as OTs de pedidos já criados. Este total é subtraído pelo saldo do endereço de flowrack, se este valor for maior, identificando a falta, será sugerido uma OT de reabastecimento desse produto.',
          'Realiza a cubagem da simulação do relatório, permitindo a separação sem a necessidade de cubar pela ZWM0015P.',
          'Calcula a quantidade do saldo do produto, e apenas faz a cubagem de remessas com saldo em estoque, deixando de cubar as demais com falta.'
        ],
        answer:
          'Calcula a quantidade simulada do pedido e soma com as OTs de pedidos já criados. Este total é subtraído pelo saldo do endereço de flowrack, se este valor for maior, identificando a falta, será sugerido uma OT de reabastecimento desse produto.'
      },
      {
        question: 'Qual o impacto do saldo negativo dos materiais na operação?',
        options: [
          'Impossibilita a criação de OTs.',
          'Impossibilita o bloqueio ou desbloqueio do Material.',
          'Impossibilita a finalização da conferência.',
          'Todas as alternativas estão corretas.'
        ],
        answer: 'Todas as alternativas estão corretas.'
      },
      {
        question:
          'Quando temos uma posição de porta pallet cheio, e o sistema envia mais volumes para esta posição. O que fazer com os volumes e ajustes no sistema?',
        options: [
          'Confirmar todos os materiais via LT24, movimentando os materiais via LT10 para as posições vazias.',
          'Confirmar todas as OTs na posição cheia, transferindo para posições vazias um a um.',
          'No coletor, clicar na opção “Ocorrências” escolher a opção TROCA DE POSIÇÃO e movimentar os produtos para o novo endereço. Em seguida, verificar se o erro está na configuração do produto (ZWM0522) ou no endereço (LS02N).',
          'Neste caso, será necessário a criação de uma posição adicional para armazenagem do material, confirmando pela LT22 OT por OT, até a conclusão de todas.'
        ],
        answer:
          'No coletor, clicar na opção “Ocorrências” escolher a opção TROCA DE POSIÇÃO e movimentar os produtos para o novo endereço. Em seguida, verificar se o erro está na configuração do produto (ZWM0522) ou no endereço (LS02N).'
      },
      {
        question:
          'Nossa numeração de depósito no SAP-WM é 210, com o WW-GRUPO passará a ser ...?',
        options: ['Permanece o dep 210', 'LT10', 'W10', 'S10'],
        answer: 'S10'
      },
      {
        question:
          'Para realizar o processo de RECUPERAÇÃO de falta no S.D.A, precisamos acessar qual passo?',
        options: [
          '6.KNAPP - 4.PICKING KNAPP - 1.CONSULTA SALDO',
          '5.PROCES INT - 2.CONSULTA - 1.CONSULTA SALDO',
          '6.KNAPP - 2.PICKING KNAPP - 1.REC FALTA KNAPP',
          '6.KNAPP - 3.PICKING - 3.CONSULTA KNAPP'
        ],
        answer: '6.KNAPP - 2.PICKING KNAPP - 1.REC FALTA KNAPP'
      },

      {
        question:
          'Para realizar o processo de SEPARAÇÃO via coletor, precisamos acessar qual passo?',
        options: [
          '4.PICKING - 1.PICKING',
          '5.PROC.INTERNOS - 2.CONSULTA - 1.CONSULTA SALDO',
          '4.PICKING - 4.EMBALAGEM 2.CONF.UNIDADE',
          '4.PICKING - 2.CHECK OUT'
        ],
        answer: '4.PICKING - 1.PICKING'
      },

      {
        question:
          'Pedido de venda solicitou 1 caixa padrão, onde no momento da separação foi informado falta, como tinha apenas essa caixa padrão no Porta Pallet, esta solicitação de separação foi para a ZWM0053P, como atender esta solicitação?',
        options: [
          'Fazer o cancelamento do material.',
          'Criar OT e separar na linha como fracionado.',
          'Movimentar o saldo do flowrack via LT10 para a posição solicitada no pedido.',
          'Montar uma nova caixa padrão utilizando o saldo fracionado via LT01, e armazenando no endereço da solicitação do pedido.'
        ],
        answer:
          'Montar uma nova caixa padrão utilizando o saldo fracionado via LT01, e armazenando no endereço da solicitação do pedido.'
      },
      {
        question: 'Qual é a meta da UPM-Geral do mês de Outubro?',
        options: ['1.604', '1.150', '2.041', '1.323'],
        answer: '1.323',
        tip: 'Começa com o n° 1...'
      },
      {
        question:
          'O termo UPM significa "Unidade por Milhão", é um dos principais indicadores da logística.Seu calculo é realizado com base na (Quantidade Vendida X Quantidade de Erros e * por 1 milhão).Precisamos manter esse indicador o mais baixo possível, pois os erros de separação resultará em devolução de clientes ,má produtividade e má atendimento.',
        options: ['V - Verdadeiro', 'F - Falso'],
        answer: 'V - Verdadeiro'
      },
      {
        question:
          'Com o WM-GRUPO os tipos de depositos de PICKING serão os; 102	Éticos (Picking) 105	Termolábeis (Picking) 107Controlados (Picking) 111	Controle Especial (Pick)',
        options: ['V - Verdadeiro', 'F - Falso'],
        answer: 'V - Verdadeiro'
      }
    ]
  },

  {
    category: 'REABASTECIMENTO',
    questions: [
      {
        question: 'Qual o significado de logística?',
        options: [
          'Significa um período de venda alta.',
          'Processo de planejar, controlar transporte, movimentação e armazenamentos.',
          'Métodos que apenas focam na redução de custos.',
          'Grande escala de mercadorias no estoque da loja.'
        ],
        answer:
          'Processo de planejar, controlar transporte, movimentação e armazenamentos.'
      },
      {
        question:
          'Qual transação é utilizada para imprimir/ reimprimir etiqueta para caixa Padrão?',
        options: ['ZWM0010P.', 'ZWM0013P', 'ZWM0012P', 'ZWM0011P'],
        answer: 'ZWM0011P'
      },

      {
        question: 'Como fazer a mudança de lote de um material?',
        options: [
          'Movimentar o saldo para o depósito 999 desbloqueado, utilizando a transação MB1B com tipo de movimento Y67',
          'Alterar o lote na MSC2N, movimentar o saldo para o 902 e confirmar a OT.',
          'Utilizar a transação MB1B, com movimento Z03, em seguida, fazer a transferência do negativo para o 902, confirmando a OT gerada.',
          'Movimentar o saldo para o depósito 920, utilizando a transação MB1B com tipo de movimento 311.'
        ],
        answer:
          'Movimentar o saldo para o depósito 999 desbloqueado, utilizando a transação MB1B com tipo de movimento Y67'
      },
      {
        question:
          'Para realizarmos o REABASTECIMENTO, precisamos estar logado em qual FILA?',
        options: [
          'EST_01',
          'REC_FALTAS',
          'Não precisamos de fila, para realizar o reabastecimento.',
          'UNI_ÉTICOS'
        ],
        answer: 'Não precisamos de fila, para realizar o reabastecimento.'
      },
      {
        question:
          'No WM-GRUPO, o JOB do reabastecimento vai deixar de ser automático e passará a ser manual, ou seja, todos os dias o líder do reabastecimento vai precisar gerar a relação de ots para o estoque?',
        options: ['V - Verdadeiro', 'F - Falso'],
        answer: 'V - Verdadeiro'
      },
      {
        question:
          'No WM-GRUPO, para facilitar nosso processo de reabastecimento, podemos realizar a transação LT10 livremente?',
        options: [
          'V - Verdadeiro',
          'F - Falso, Não devemos utilizar a transação LT10.'
        ],
        answer: 'F - Falso, Não devemos utilizar a transação LT10.'
      },
      {
        question:
          'Para realizarmos a DEVOLUÇÃO DE SOBRA da conferência, devemos seguir qual passo?',
        options: [
          '2.ARMAZENAGEM - 1.FORNECE/TRANSF',
          '5.PROC.INTERNOS - 4.DEV.CONFERÊNCIA - 2.ARMAZENAGEM',
          '3.REABASTECIMENTO - 2.REPOSIÇÃO',
          '5.PROC.INTERNOS - 4.DEV.CONFERÊNCIA - 3.DEV.CONFERÊNCIA'
        ],
        answer: '5.PROC.INTERNOS - 4.DEV.CONFERÊNCIA - 3.DEV.CONFERÊNCIA'
      },
      {
        question:
          'Com base no novo sistema, qual será o novo tipo de deposito da linha de separação ("PICKING")?',
        options: ['103', '102', '110', '132'],
        answer: '102',
        tip: 'Antiga numeração do Tipo de Deposito do Pranchão'
      },
      {
        question:
          'Com base no novo sistema, qual será o novo numero do tipo de deposito da linha de separação do psico ("PICKING - CONTROLADOS")?',
        options: ['999', '109', '107', '302'],
        answer: '107'
      },
      {
        question:
          'Para realizar o processo de CONFIRMAÇÃO de bin na posição, devemos seguir qual passo?',
        options: [
          '3.REABASTECIMENTO - 3.ABASTECIMENTO',
          '3.REABASTECIMENTO - 2.REPOSIÇÃO',
          '2.ARMAZANAGEM - 1.FORNEC/TRANSF',
          '5.PROCESSOS INTER. - 1.TRANSF.POSICAO - 3.TRANSF.BIN'
        ],
        answer: '3.REABASTECIMENTO - 3.ABASTECIMENTO'
      },
      {
        question:
          'Qual será a nova numeração do tipo de deposito do PRANCHÃO , baseado no WM-Grupo?',
        options: [
          'Nenhuma das alternativas, o novo sistema não existirá posições de pranchão.Serão considerados deposito de PICKING',
          '102 - 112 - 122 - 132',
          '104 - 114 - 124 - 134',
          'Todas as posição são pranchão.'
        ],
        answer:
          'Nenhuma das alternativas, o novo sistema não existirá posições de pranchão.Serão considerados deposito de PICKING'
      }
    ]
  },

  {
    category: 'CONFERÊNCIA',
    questions: [
      {
        question:
          'Para realizar o processo de CONFERÊNCIA (por unidades) via coletor, devemos seguir qual passo?',
        options: [
          '1.RECEBIMENTO - 4.RECEBIMENTO DT',
          '4.PICKING - 4.EMBALAGEM - 1.EMBALAGEM',
          '4.PICKING - 4.EMBALAGEM - 2.CONF.UNIDADE',
          '4.PICKING - 2.CHECK OUT'
        ],
        answer: '4.PICKING - 4.EMBALAGEM - 2.CONF.UNIDADE'
      },
      {
        question: 'Quando NÃO É possível fazer o cancelamento do item?',
        options: [
          'Quando o saldo estiver no porta pallet',
          'Quando existir um recebimento processando o mesmo item.',
          'Quando existir OT pendente para o item, cancelar na transação VL02N',
          'Quando existir OT pendente para o item, ou quando o item já foi conferido totalmente.'
        ],
        answer:
          'Quando existir OT pendente para o item, ou quando o item já foi conferido totalmente.'
      },
      {
        question: 'Qual o significado do status C.C na VL02N na aba picking?',
        options: [
          'Pedido em andamento',
          'Pedido com Nota Fiscal rejeitada, necessário fazer o estorno.',
          'Pedido finalizado, totalmente completo',
          'Pedido totalmente cancelado.'
        ],
        answer: 'Pedido finalizado, totalmente completo'
      },

      {
        question: 'Qual a diferença entre Multi pedidos x Agrupamento',
        options: [
          'Multi pedidos: Pedidos de 1 unidade cubado no mesmo instante, de itens diferentes em um mesmo volume que serão desmembrados na conferência.Agrupamento: Pedidos do mesmo cliente cubado no mesmo instante, formando um grupo para a quantidade de pedidos selecionados.',
          'Agrupamento: Pedidos de 1 unidade cubado no mesmo instante, de itens diferentes em um mesmo volume que serão desmembrados na conferência. Multi pedidos: Pedidos do mesmo cliente cubado no mesmo instante, formando um grupo para a quantidade de pedidos selecionados',
          'Nenhuma das alterativas está correta'
        ],
        answer:
          'Multi pedidos: Pedidos de 1 unidade cubado no mesmo instante, de itens diferentes em um mesmo volume que serão desmembrados na conferência.Agrupamento: Pedidos do mesmo cliente cubado no mesmo instante, formando um grupo para a quantidade de pedidos selecionados.'
      },
      {
        question:
          'Ao realizar a finalização da remessa, consequentemente já temos a nota fiscal emitida. Foi identificado que a etiqueta está rasgada/danificada. Qual transação é utilizada para realizar a reimpressão?',
        options: ['ZWM0031P', 'ZWM0045P', 'ZWM0011P', 'ZMM0564P'],
        answer: 'ZWM0045P'
      },

      {
        question:
          'No momento da finalização da conferência, apresentou as seguintes mensagens “Não estão previstos estoques negativos no tipo de depósito 218 “e “Não existe saldo para remessa XXXXXXX no 218” o que fazer nestes casos?',
        options: [
          'Clicar em F7, confirmando a falta da mercadoria',
          'Sair dos programas, pois podem estar bloqueando as telas onde podemos ter concorrência do mesmo material em programas diferentes.',
          'Avaliar o saldo dos materiais do volume, se existe bloqueio e se estão disponíveis no depósito 218. Caso positivo, desbloquear e/ou movimentar para o 218 via LT03.',
          'Clicar em reconferir o volume após recuperação de falta.'
        ],
        answer:
          'Avaliar o saldo dos materiais do volume, se existe bloqueio e se estão disponíveis no depósito 218. Caso positivo, desbloquear e/ou movimentar para o 218 via LT03.'
      },
      {
        question: 'Qual a finalidade do relatório ZSD0211?',
        options: [
          'Verificar volumes conferidos na expedição',
          'Verificar volumes não conferidos na expedição',
          'Verificar total de volumes na expedição',
          'Todas as alternativas estão corretas'
        ],
        answer: 'Todas as alternativas estão corretas'
      },
      {
        question:
          'Para realizarmos qualquer tipo de RECUPERAÇÃO DE FALTA, precisamos estar logado em qual FILA?',
        options: ['EST_01', 'REC_FALTAS', 'V_MESA', 'UNI_ÉTICOS'],
        answer: 'REC_FALTAS'
      },
      {
        question:
          'Qual é a transação que é recomendada para inicar o processo de CONFERÊNCIA (via computador)?',
        options: ['ZCONFLINHA', 'ZWM0012NP', 'ZWM0010N', 'LX03'],
        answer: 'ZWM0010N',
        tip: 'Termina com "N"'
      },
      {
        question:
          'Para iniciar o processo de RECUPERAÇÃO DE FALTA (via coletor), devemos seguir qual passo?',
        options: [
          '4.PROCESSO INT - 4.INVENTÁRIO',
          '4.PICKING - 3.RECUPERAÇÃO FALTA - 1.RECUP FALTA',
          '1.RECEBIMENTO - 4.GUARDA - 2.CONFERÊNCIA',
          '2.SEPARAÇÃO - 2.SEPARAÇÃO'
        ],
        answer: '4.PICKING - 3.RECUPERAÇÃO FALTA - 1.RECUP FALTA'
      },

      {
        question:
          'Qual é a transação que utilizamos para acessar o CHECK OUT (via computador)?',
        options: ['ZWM0023P', 'LT15', 'ZWM0027', 'ZSD0211'],
        answer: 'ZWM0023P',
        tip: 'Termina com "P"'
      },
      {
        question:
          'Para realizar o processo de CONFERÊNCIA DE PEDIDÃO (Cx Fechadas) via coletor, devemos seguir qual passo?',
        options: [
          '1.CHECK OUT - 2.CONFERIR',
          '4.PROC.INTER - 4.EMBALAGEM - 1.CONFERIR',
          '4.PICKING - 4.EMBALAGEM - 2.CONF.UNIDADE',
          '4.PICKING - 4.EMBALAGEM - 1.EMBALAGEM'
        ],
        answer: '4.PICKING - 4.EMBALAGEM - 1.EMBALAGEM'
      },
      {
        question:
          'Qual é a nossa meta do Cancelamento Operacional mês Outubro?',
        options: ['0,08%', '0,10%', '0,11%', '0,09%'],
        answer: '0,09%'
      },
      {
        question:
          'Qual dessas etapas está relacionada á prazos de saída e entrega das mercadorias finais?',
        options: [
          'Armazenamento',
          'Nenhuma das Anteriores',
          'Distruibuição',
          'Transporte'
        ],
        answer: 'Distruibuição'
      }
    ]
  }
]

export default data
