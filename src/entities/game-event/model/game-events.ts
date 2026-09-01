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
    characterId: 'donkey',

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
    characterId: 'donkey',

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

      nextGameEventId: 'fisherman-arrives',
    },

    rightChoice: {
      textKey: 'events.oracleArrives.choices.right',

      effects: {
        gods: 20,
        supplies: -20,
      },

      nextGameEventId: 'fisherman-arrives',
    },
  },
  {
    id: 'fisherman-arrives',
    type: 'choice',
    characterId: 'fisherman',

    textKey: 'events.fishermanArrives.text',

    leftChoice: {
      textKey: 'events.fishermanArrives.choices.left',

      effects: {
        army: +10,
        supplies: -10,
      },

      nextGameEventId: 'diogenes-of-sinope',
    },

    rightChoice: {
      textKey: 'events.fishermanArrives.choices.right',

      effects: {
        people: +10,
        supplies: -10,
      },

      nextGameEventId: 'diogenes-of-sinope',
    },
  },
  {
    id: 'diogenes-of-sinope',
    type: 'choice',
    characterId: 'diogenes',

    textKey: 'events.diogenesOfSinope.text',

    leftChoice: {
      textKey: 'events.diogenesOfSinope.choices.left',

      effects: {
        gods: +10,
        people: -10,
      },

      nextGameEventId: 'this-is-sparta',
    },

    rightChoice: {
      textKey: 'events.diogenesOfSinope.choices.right',

      effects: {
        people: +10,
        supplies: -10,
      },

      nextGameEventId: 'this-is-sparta',
    },
  },
  {
    id: 'this-is-sparta',
    type: 'choice',
    characterId: 'messengerFromSparta',

    textKey: 'events.thisIsSparta.text',

    leftChoice: {
      textKey: 'events.thisIsSparta.choices.left',

      effects: {
        supplies: -10,
        army: -10,
      },

      nextGameEventId: 'olives',
    },

    rightChoice: {
      textKey: 'events.thisIsSparta.choices.right',

      effects: {
        army: +10,
        people: +10,
      },

      nextGameEventId: 'olives',
    },
  },
  {
    id: 'olives',
    type: 'choice',
    characterId: 'oliveMerchant',

    textKey: 'events.olives.text',

    leftChoice: {
      textKey: 'events.olives.choices.left',

      effects: {
        supplies: +10,
        people: -10,
      },

      nextGameEventId: 'coins-for-the-sanctuary',
    },

    rightChoice: {
      textKey: 'events.olives.choices.right',

      effects: {
        supplies: -20,
        people: +20,
      },

      nextGameEventId: 'coins-for-the-sanctuary',
    },
  },
  {
    id: 'coins-for-the-sanctuary',
    type: 'choice',
    characterId: 'priestessWithoutATemple',

    textKey: 'events.coinsForTheSanctuary.text',

    leftChoice: {
      textKey: 'events.coinsForTheSanctuary.choices.left',

      effects: {
        gods: -10,
        supplies: +10,
      },

      nextGameEventId: 'the-cost-of-glory',
    },

    rightChoice: {
      textKey: 'events.coinsForTheSanctuary.choices.right',

      effects: {
        gods: +20,
        supplies: -20,
      },

      nextGameEventId: 'the-cost-of-glory',
    },
  },
  {
    id: 'the-cost-of-glory',
    type: 'choice',
    characterId: 'strategos',

    textKey: 'events.theCostOfGlory.text',

    leftChoice: {
      textKey: 'events.theCostOfGlory.choices.left',

      effects: {
        people: +10,
        supplies: +10,
      },

      nextGameEventId: 'hetaera-seeks-shelter',
    },

    rightChoice: {
      textKey: 'events.theCostOfGlory.choices.right',

      effects: {
        army: +20,
        supplies: -20,
        people: +10,
      },

      nextGameEventId: 'hetaera-seeks-shelter',
    },
  },
  {
    id: 'hetaera-seeks-shelter',
    type: 'choice',
    characterId: 'hetaera',

    textKey: 'events.hetaeraSeeksShelter.text',

    leftChoice: {
      textKey: 'events.hetaeraSeeksShelter.choices.left',

      effects: {
        army: +10,
        people: -10,
      },

      nextGameEventId: 'shepherd-divine-sheep',
    },

    rightChoice: {
      textKey: 'events.hetaeraSeeksShelter.choices.right',

      effects: {
        people: +10,
        army: +10,
      },

      nextGameEventId: 'shepherd-divine-sheep',
    },
  },
  {
    id: 'shepherd-divine-sheep',
    type: 'choice',
    characterId: 'shepherd',

    textKey: 'events.shepherdDivineSheep.text',

    leftChoice: {
      textKey: 'events.shepherdDivineSheep.choices.left',

      effects: {
        supplies: +10,
        gods: -10,
      },

      nextGameEventId: 'poet-ode',
    },

    rightChoice: {
      textKey: 'events.shepherdDivineSheep.choices.right',

      effects: {
        people: +10,
        supplies: -10,
      },

      nextGameEventId: 'poet-ode',
    },
  },
  {
    id: 'poet-ode',
    type: 'choice',
    characterId: 'poet',

    textKey: 'events.poetOde.text',

    leftChoice: {
      textKey: 'events.poetOde.choices.left',

      effects: {
        gods: +10,
        people: -10,
      },

      nextGameEventId: null,
    },

    rightChoice: {
      textKey: 'events.poetOde.choices.right',

      effects: {
        people: +10,
        supplies: -10,
      },

      nextGameEventId: null,
    },
  },
];
