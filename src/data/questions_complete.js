/* Questoes para adicionar */

const data = [
  {
    category: 'SEPARAÇÃO',
    questions: [
      {
        question:
          'Os sistemas FEFO (First Expire, First Out) é um termo utilizado na areá de logística para?',
        options: [
          'Método que coloca os produtos com prazo de validade mais próximo na prioridade de saída.',
          'Controle de entrada e saída de materiais de insumos.',
          'Relacionar o tipo de produto a ser controlado ou ao tipo de apuração do valor investido no estoque.',
          'Sisteme de Gestão de Processo internos realizado pelo Líder: Anderson Germano.'
        ],
        answer:
          'Determinar o tipo de controle,movimentação de estoque utilizado no centro de distribuição, armazém ou almoxarifado.'
      },
      {
        question:
          'Nossa numeração de depósito era 210, com o WM-Grupo passará a ser ...?',
        options: ['Permanece o dep 210', 'L10', 'W10', 'S10'],
        answer: 'S10'
      },
      {
        question: 'Qual é a meta da UPM-Geral do mês de Outubro?',
        options: ['1.604', '1.150', '2.041', '1.323'],
        answer: '1.323',
        tip: 'Começa com o n° 1...'
      },
      {
        question: 'O que significa o termo UPM?',
        options: [
          'União Parque Mundial',
          'Unidade Por Milhão',
          'Unidade Policia Militar',
          'Unidade Padrão Municipal'
        ],
        answer: 'Unidade Por Milhão',
        tip: 'O calculo da Upm é feito em cima da quantidade vendida...'
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
          'Com base no novo sistema, qual será o novo tipo de deposito da linha de separação ("PICKING -ÉTICOS")?',
        options: ['103', '102', '110', '132'],
        answer: '102'
      },
      {
        question:
          'Com base no novo sistema, qual será o novo tipo de deposito da linha de separação do psico ("PICKING - CONTROLADOS")?',
        options: ['999', '109', '107', '302'],
        answer: '107'
      },
      {
        question:
          'Qual será o novo tipo de deposito do pranchão , baseado no WM-Grupo?',
        options: [
          'Nenhuma das alternativas, o novo sistema não existe posições fixas no porta pallet.',
          '102 - 112 - 122 - 132',
          '104 - 114 - 124 - 134',
          'Todas as posição são pranchão.'
        ],
        answer:
          'Nenhuma das alternativas, o novo sistema não existe posições fixas no porta pallet.'
      }
    ]
  },

  {
    category: 'CONFERÊNCIA',
    questions: [
      {
        question:
          'Qual é a transação que utilizamos para realizar conferência (via computador)?',
        options: ['ZCONFLINHA', 'ZWM0012NP', 'ZWM0010N', 'LX03'],
        answer: 'ZWM0010N',
        tip: 'Termina com "N"'
      },
      {
        question:
          'Qual é a transação que utilizamos para acessar o Chekout (via computador)?',
        options: ['ZWM0023P', 'LT15', 'ZWM0027', 'ZSD0211'],
        answer: 'ZWM0023P'
      },
      {
        question:
          'Para iniciar o processo de recuperação de falta (via coletor), devemos seguir qual passo a passo?',
        options: [
          'Lm01- 4.Processo Interno -4.Inventário',
          'Lm01- 4.Picking -3.Recuperação de Falta -1.Recup Falta',
          'Lm01- 1.Recebimento -4.Guarda -2-Conferência',
          'Lm01- 2.Separação -2-Separação'
        ],
        answer: 'Lm01- 4.Picking -3.Recuperação de Falta -1.Recup Falta'
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
