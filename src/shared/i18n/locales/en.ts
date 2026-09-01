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
    donkey: {
      name: 'Donkey',
    },
    fisherman: {
      name: 'Fisherman',
    },
    diogenes: {
      name: 'Diogenes of Sinope',
    },
    messengerFromSparta: {
      name: 'Messenger from Sparta',
    },
    oliveMerchant: {
      name: 'Olive Merchant',
    },
    priestessWithoutATemple: {
      name: 'Priestess without a Temple',
    },
    strategos: {
      name: 'Strategos',
    },
    hetaera: {
      name: 'Hetaera',
    },
    shepherd: {
      name: 'Shepherd',
    },
    poet: {
      name: 'Poet',
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
    fishermanArrives: {
      text: 'A fisherman brings news: a giant squid has been seen in the sea, winking and saying "soon". The fisherman wants a reward for the information.',
      choices: {
        left: 'Send a messenger to investigate',
        right: 'Give a coin and forget about it',
      },
    },
    diogenesOfSinope: {
      text: 'Diogenes arrives in the polis. He lives in a barrel and requests a larger one, claiming the old one "restricts his spirit."',
      choices: {
        left: 'Tell him to leave, saying he is already in a barrel',
        right: 'Provide a government-issued barrel',
      },
    },
    thisIsSparta: {
      text: 'A breathless Spartan arrives. He only says: "This. Is. Sparta!" and waits for your reaction.',
      choices: {
        left: 'Give him water and send him back',
        right: 'Reply: "This. Is. The Polis."',
      },
    },
    olives: {
      text: 'The merchant offers a deal: buy 100 amphorae of olive oil at an incredibly low price. But he whispers that the oil is "slightly rancid."',
      choices: {
        left: 'Refuse because of the smell',
        right: 'Buy and distribute to the people',
      },
    },
    coinsForTheSanctuary: {
      text: 'The priestess without a temple asks for coins to build a sanctuary. She promises that the gods will be pleased and will help the polis.',
      choices: {
        left: 'Let her pray outdoors',
        right: 'Give coins and help with construction',
      },
    },
    theCostOfGlory: {
      text: 'Your strategos suggests organizing a military parade to "show the neighbors who is in charge." This will be costly.',
      choices: {
        left: 'Refuse, better to spend on road repairs',
        right: 'Organize the parade',
      },
    },
    hetaeraSeeksShelter: {
      text: 'A famous hetaera asks for shelter: she is being pursued by a jealous client, the son of an archon from a neighboring polis. She offers valuable information in exchange for protection.',
      choices: {
        left: 'Refuse to avoid damaging relations with the neighbors',
        right: 'Hide her',
      },
    },
    shepherdDivineSheep: {
      text: 'A shepherd claims that one of his sheep is a reincarnated god (according to him, the sheep has "the gaze of Zeus"). He asks to be exempt from taxes for three years.',
      choices: {
        left: 'Do not believe him and fine him for foolishness',
        right: 'Exempt him from taxes',
      },
    },
    poetOde: {
      text: 'A poet arrives and recites an ode in your honor. It is long, tedious, and he expects a reward.',
      choices: {
        left: 'Say the ode is "too brilliant for mortals" and drive him out',
        right: 'Reward him generously',
      },
    },
  },
} as const;
