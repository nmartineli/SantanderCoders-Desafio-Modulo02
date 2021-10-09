/* Módulo calculadora

- Função "Enter" -> vai receber uma tecla e com ela você pode fazer alguma coisa (guardar de alguma maneira)
- Função "Equals" -> é o que vai fazer o igual e mostrar o resultado. (aí acaba a conta. começa outra operação)
- Função "list" ->  mostra todas as operações já executadas na calculadora, seguidas de seus resultados (retorna um array (MAP) 
que receba a conta anterior e o retorno dela)
- Função "reset" -> retorna um objeto vazio

Controlar os operadores e entradas de valor (se não é número ou operador válido, retorna um aviso)

*/

let calculatorModule = (() => {
  let _inputs = [];
  let _operations = [];

  const sum = (a, b) => a + b;
  const subtract = (a, b) => a - b;
  const multiply = (a, b) => a * b;
  const divide = (a, b) => (b > 0 ? a / b : NaN);

  const getOperation = {
    '+': sum,
    '-': subtract,
    '*': multiply,
    '/': divide,
  };

  const enter = (input) => {
    _inputs = [..._inputs, input];
    console.log(input);
  };

  const equals = () => {
    const [a, operator, b] = _inputs;

    if (
      typeof a !== 'number' ||
      typeof b !== 'number' ||
      !getOperation[operator]
    ) {
      _inputs = [];
      return console.log(
        'Você inseriu dados inválidos. Por favor, refaça o seu cálculo'
      );
    }

    const operation = getOperation[operator];

    const results = operation(a, b);

    const finalOperation = `${a} ${operator} ${b} = ${results}`;
    _operations = [..._operations, finalOperation];

    console.log(results);
  };

  const list = () => {
    _operations.map((operation, index) => {
      console.log(`Operação ${index + 1}: ${operation}`);
    });
  };

  const reset = () => {
    _operations = [];
    _inputs = [];
    console.log(_operations);
  };

  return {
    enter,
    equals,
    list,
    reset,
  };
})();

calculatorModule.enter(5);
calculatorModule.enter('v');
calculatorModule.enter(5);
calculatorModule.equals();

calculatorModule.enter(100);
calculatorModule.enter('-');
calculatorModule.enter(30);
calculatorModule.equals();

calculatorModule.list();

/* Faça uma série de strings dos nomes dizendo se eles podem ou não ir para The Matrix (> 18 anos)  */

let people = [
  { name: 'Angelina Jolie', age: 80 },
  { name: 'Eric Jones', age: 2 },
  { name: 'Paris Hilton', age: 5 },
  { name: 'Kayne West', age: 16 },
  { name: 'Bob Ziroll', age: 100 },
];

let checkWhoCanGoToTheMatrix = people.map((x) => {
  if (x.age > 18) {
    return `${x.name} can go to The Matrix`;
  } else {
    return `${x.name} is under age`;
  }
});

console.log(checkWhoCanGoToTheMatrix);

/* Dada uma série de eleitores em potencial, retorne um objeto que represente os resultados da votação.
Inclua quantos eleitores potenciais tinham entre 18 e 25 anos, quantos eram de 26 a 35, quantos de 36 a 55 anos e quantos de cada uma dessas
faixas etárias realmente votaram. O objeto resultante contendo esses dados deve ter 6 propriedades. Veja o exemplo de saída na parte inferior  */

let voters = [
  { name: 'Bob', age: 30, voted: true },
  { name: 'Jake', age: 32, voted: true },
  { name: 'Kate', age: 25, voted: false },
  { name: 'Sam', age: 20, voted: false },
  { name: 'Phil', age: 21, voted: true },
  { name: 'Ed', age: 55, voted: true },
  { name: 'Tami', age: 54, voted: true },
  { name: 'Mary', age: 31, voted: false },
  { name: 'Becky', age: 43, voted: false },
  { name: 'Joey', age: 41, voted: true },
  { name: 'Jeff', age: 30, voted: true },
  { name: 'Zack', age: 19, voted: false },
];

let votersByAge = voters.reduce(
  (acc, voter) => {
    if (voter.age <= 25) {
      acc.numYoungPeople += 1;
      if (voter.voted) {
        acc.numYoungVotes += 1;
      }
    } else if (voter.age >= 26 && voter.age <= 35) {
      acc.numMidsPeople += 1;
      if (voter.voted) {
        acc.numMidVotesPeople += 1;
      }
    } else {
      acc.numOldsPeople += 1;
      if (voter.voted) {
        acc.numOldVotesPeople += 1;
      }
    }
    return {
      numYoungVotes: acc.numYoungPeople,
      numYoungPeople: acc.numYoungPeople,
      numMidVotesPeople: acc.numMidVotesPeople,
      numMidsPeople: acc.numMidsPeople,
      numOldVotesPeople: acc.numOldVotesPeople,
      numOldsPeople: acc.numOldsPeople,
    };
  },
  {
    numYoungVotes: 0,
    numYoungPeople: 0,
    numMidVotesPeople: 0,
    numMidsPeople: 0,
    numOldVotesPeople: 0,
    numOldsPeople: 0,
  }
);

console.log(votersByAge);
