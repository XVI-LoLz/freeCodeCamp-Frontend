export const getRandomQuote = (archive = getArchive()) => {
  const random = Math.floor(Math.random() * Object.keys(archive).length);
  console.log(random)
  return random
}

export const getArchive = () => {
  return archive
}

const archive = {
  quote0: {
    author: 'Ovid',
    text:'Courage conquers all things: it even gives strength to the body.'
  },
  quote1: {
    author: 'Lao Tzu',
    text: 'Great acts are made up of small deeds.'
  },
  quote2: {
    author: 'Plato',
    text: 'The greatest wealth is to live content with little.'
  },
  quote3: {
    author: 'Albert Einstein',
    text: 'Great spirits have always encountered violent opposition from mediocre minds.'
  },
  quote4: {
    author: 'Ralph Waldo Emerson',
    text: 'Our greatest glory is not in never failing, but in rising up every time we fail.'
  },
  quote5: {
    author: 'John F. Kennedy',
    text: 'Those who dare to fail miserably can achieve greatly.'
  },
  quote6:{
    author: 'Richard Nixon',
    text: 'I can take it. The tougher it gets, the cooler I get.'
  },
  quote7:{
    author: 'Rick Warren',
    text: `You need to understand something that will liberate your life: You don't need other people's approval to be happy.`
  },
  quote8:{
    author: 'Alan Retana',
    text: 'Todas hieren, la última mata.'
  },
  quote9:{
    author: 'Horace',
    text: 'Carpe diem'
  },
}