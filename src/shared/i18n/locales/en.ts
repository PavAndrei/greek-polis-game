export const en = {
  resources: {
    gods: 'Gods',
    people: 'People',
    army: 'Army',
    supplies: 'Supplies',
  },
  characters: {
    farmer: {
      name: 'Farmer',
    },
    oracle: {
      name: 'Oracle',
    },
  },
  events: {
    talkingDonkey: {
      text: 'A farmer arrives with a complaint: his donkey has started speaking and now demands better food, a private stable, and Sundays off. The farmer is horrified.',
      choices: {
        left: 'Order the donkey executed for blasphemy',
        right: 'Hire the donkey as an agricultural advisor',
      },
    },
    donkeyExecution: {
      text: 'The next morning, the farmer returns. During the night, every donkey in the polis began shouting your name at once. The citizens consider it a bad omen.',
      choices: {
        left: 'Forbid discussion of the incident',
        right: 'Declare a donkey memorial day',
      },
    },
    donkeyAdvisor: {
      text: 'A year passes. The donkey proves to be an unexpectedly talented advisor. The harvest improves, but now he demands a seat at council meetings and a golden nameplate.',
      choices: {
        left: 'Remind the donkey of his place',
        right: 'Grant the golden nameplate',
      },
    },
    oracleArrives: {
      text: 'An oracle arrives in the polis. He claims the gods are troubled by your recent decisions and demand a sacrifice.',
      choices: {
        left: 'Refuse the oracle',
        right: 'Prepare the sacrifice',
      },
    },
  },
} as const;
