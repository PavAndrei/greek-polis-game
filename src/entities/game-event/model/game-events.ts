import { GameEvent } from './game-event-types';

export const gameEvents: GameEvent[] = [
  {
    id: 'talking-donkey',
    type: 'choice',
    characterId: 'farmer',

    text: 'Крестьянин пришёл с жалобой: его осёл заговорил и требует лучшую еду, отдельный сарай и выходной по воскресеньям. Крестьянин в шоке.',

    leftChoice: {
      text: 'Приказать осла казнить за богохульство',

      effects: {
        gods: 15,
        people: -15,
      },

      nextGameEventId: 'donkey-execution',
    },

    rightChoice: {
      text: 'Нанять осла советником по сельскому хозяйству',

      effects: {
        supplies: 30,
        gods: -20,
      },

      nextGameEventId: 'donkey-advisor',
    },
  },
  {
    id: 'donkey-execution',
    type: 'choice',
    characterId: 'farmer',

    text: 'На следующее утро крестьянин возвращается. Ночью все ослы в полисе одновременно начали кричать ваше имя. Жители считают это дурным знаком.',

    leftChoice: {
      text: 'Запретить обсуждать произошедшее',

      effects: {
        people: -10,
        gods: 10,
      },

      nextGameEventId: 'oracle-arrives',
    },

    rightChoice: {
      text: 'Объявить день памяти осла',

      effects: {
        people: 15,
        supplies: -10,
      },

      nextGameEventId: 'oracle-arrives',
    },
  },
  {
    id: 'donkey-advisor',
    type: 'choice',
    characterId: 'farmer',

    text: 'Прошёл год. Осёл оказался неожиданно талантливым советником. Урожай вырос, но теперь он требует место на заседаниях совета и золотую табличку со своим именем.',

    leftChoice: {
      text: 'Напомнить ослу его место',

      effects: {
        people: -10,
        gods: 10,
      },

      nextGameEventId: 'oracle-arrives',
    },

    rightChoice: {
      text: 'Выдать золотую табличку',

      effects: {
        people: 10,
        gods: -10,
      },

      nextGameEventId: 'oracle-arrives',
    },
  },
  {
    id: 'oracle-arrives',
    type: 'choice',

    characterId: 'oracle',

    text: 'В полис прибывает оракул. Он утверждает, что боги обеспокоены вашими недавними решениями и требуют жертвоприношения.',

    leftChoice: {
      text: 'Отказать оракулу',

      effects: {
        gods: -20,
        supplies: 10,
      },

      nextGameEventId: null,
    },

    rightChoice: {
      text: 'Подготовить жертвоприношение',

      effects: {
        gods: 20,
        supplies: -20,
      },

      nextGameEventId: null,
    },
  },
];
