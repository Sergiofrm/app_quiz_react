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
          'Nossa numeração de depósito no SAP-WM é 210, com o WM-Grupo passará a ser ...?',
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
          'Para realizarmos o REABASTECIMENTO, precisamos estar logado em qual FILA?',
        options: [
          'EST_01',
          'REC_FALTAS',
          'Não Precisamos de fila, para realizar o reabastecimento.',
          'UNI_ÉTICOS'
        ],
        answer: 'Não Precisamos de fila, para realizar o reabastecimento.'
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
