const data = [
  {
    category: 'SEPARAÇÃO',
    questions: [
      {
        question: 'Qual tag cria um parágrafo?',
        options: ['<p>', '<h1>', '<text>', '<ul>'],
        answer: '<p>',
        tip: 'É uma tag de uma letra apenas'
      },
      {
        question: 'Qual atributo adiciona um link para a tag a?',
        options: ['alt', 'href', 'src', 'link'],
        answer: 'href',
        tip: 'Hyperlink Reference'
      },
      {
        question: 'As listas não ordenadas tem a tag de:',
        options: ['<ol>', '<ul>', '<li>', '<list>'],
        answer: '<ul>'
      },
      {
        question: 'Qual atributo deixa o input obrigatório?',
        options: ['placeholder', 'value', 'required', 'maxlength'],
        answer: 'required'
      },
      {
        question: 'A tag semântica indicada para rodapés é a:',
        options: ['div', 'main', 'section', 'footer'],
        answer: 'footer'
      }
    ]
  },
  {
    category: 'REABASTECIMENTO',
    questions: [
      {
        question: 'Qual regra altera a cor de um elemento?',
        options: ['color', 'background-color', 'font-size', 'transition'],
        answer: 'color',
        tip: 'Cor em inglês'
      },
      {
        question: 'Para aumentar a fonte de um elemento utilizamos:',
        options: ['font', 'text-transform', 'font-size', 'hover'],
        answer: 'font-size'
      },
      {
        question: 'A posição que deixa um elemento fixo é a:',
        options: ['static', 'absolute', 'fixed', 'relative'],
        answer: 'fixed'
      }
    ]
  },
  {
    category: 'CONFERÊNCIA',
    questions: [
      {
        question:
          'Qual é a transação que utilizamos para realizar conferência ?',
        options: ['ZCONFLINHA', 'ZWM0012NP', 'ZWM0010N', 'LX03'],
        answer: 'ZWM0010N'
      },
      {
        question: 'Qual é a transação que utilizamos para verificar o Chekout?',
        options: ['ZWM0023P', 'LT15', 'ZWM0027', 'ZSD0211'],
        answer: 'ZWM0023P'
      },
      {
        question: 'Qual dos tipos de dado a seguir não existe em JavaScript?',
        options: ['string', 'number', 'boolean', 'float'],
        answer: 'float'
      },
      {
        question: 'Qual dos métodos a seguir seleciona um elemento?',
        options: ['querySelector', 'parseInt', 'sort', 'reduce'],
        answer: 'querySelector'
      },
      {
        question:
          'Qual destas propriedades da a quantidade de elementos de um array?',
        options: ['qty', 'length', 'items', 'index'],
        answer: 'length'
      }
    ]
  }
]

export default data
