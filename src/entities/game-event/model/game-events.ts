import type { GameEvent } from './game-event-types';

export const gameEvents: GameEvent[] = [
  {
    id: 'talking-donkey',
    type: 'choice',
    characterId: 'farmer',

    textKey: 'events.talkingDonkey.text',

    leftChoice: {
      textKey: 'events.talkingDonkey.choices.left',

      effects: {
        gods: 15,
        people: -15,
      },

      nextGameEventId: 'donkey-execution',
    },

    rightChoice: {
      textKey: 'events.talkingDonkey.choices.right',

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

    textKey: 'events.donkeyExecution.text',

    leftChoice: {
      textKey: 'events.donkeyExecution.choices.left',

      effects: {
        people: -10,
        gods: 10,
      },

      nextGameEventId: 'oracle-arrives',
    },

    rightChoice: {
      textKey: 'events.donkeyExecution.choices.right',

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

    textKey: 'events.donkeyAdvisor.text',

    leftChoice: {
      textKey: 'events.donkeyAdvisor.choices.left',

      effects: {
        people: -10,
        gods: 10,
      },

      nextGameEventId: 'oracle-arrives',
    },

    rightChoice: {
      textKey: 'events.donkeyAdvisor.choices.right',

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

    textKey: 'events.oracleArrives.text',

    leftChoice: {
      textKey: 'events.oracleArrives.choices.left',

      effects: {
        gods: -20,
        supplies: 10,
      },

      nextGameEventId: null,
    },

    rightChoice: {
      textKey: 'events.oracleArrives.choices.right',

      effects: {
        gods: 20,
        supplies: -20,
      },

      nextGameEventId: null,
    },
  },
];
