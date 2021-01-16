let users = {
  sarahedo: {
    id: 'sarahedo',
    name: 'Sarah Edo',
    avatarURL:'https://cdn1.iconfinder.com/data/icons/website-internet/48/website_-_female_user-512.png' ,
    answers: {
      "8xf0y6ziyjabvozdd253nd": 'optionOne',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo',
      "am8ehyc8byjqgar0jgpub9": 'optionTwo',
      "loxhs1bqm25b708cmbf3g": 'optionTwo'
    },
    questions: ['8xf0y6ziyjabvozdd253nd', 'am8ehyc8byjqgar0jgpub9']
  },
  tylermcginnis: {
    id: 'tylermcginnis',
    name: 'Tyler McGinnis',
    avatarURL: 'data:image/png;base64,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',
    answers: {
      "vthrdm985a262al8qx3do": 'optionOne',
      "xj352vofupe1dqz9emx13r": 'optionTwo',
    },
    questions: ['loxhs1bqm25b708cmbf3g', 'vthrdm985a262al8qx3do'],
  },
  johndoe: {
    id: 'johndoe',
    name: 'John Doe',
    avatarURL: 'https://www.w3schools.com/w3images/avatar2.png',
    answers: {
      "xj352vofupe1dqz9emx13r": 'optionOne',
      "vthrdm985a262al8qx3do": 'optionTwo',
      "6ni6ok3ym7mf1p33lnez": 'optionTwo'
    },
    questions: ['6ni6ok3ym7mf1p33lnez', 'xj352vofupe1dqz9emx13r'],
  }
}

let questions = {
  "8xf0y6ziyjabvozdd253nd": {
    id: '8xf0y6ziyjabvozdd253nd',
    author: 'sarahedo',
    timestamp: 1467166872634,
    optionOne: {
      votes: ['sarahedo'],
      text: 'have horrible short term memory',
    },
    optionTwo: {
      votes: [],
      text: 'have horrible long term memory'
    }
  },
  "6ni6ok3ym7mf1p33lnez": {
    id: '6ni6ok3ym7mf1p33lnez',
    author: 'johndoe',
    timestamp: 1468479767190,
    optionOne: {
      votes: [],
      text: 'become a superhero',
    },
    optionTwo: {
      votes: ['johndoe', 'sarahedo'],
      text: 'become a supervillain'
    }
  },
  "am8ehyc8byjqgar0jgpub9": {
    id: 'am8ehyc8byjqgar0jgpub9',
    author: 'sarahedo',
    timestamp: 1488579767190,
    optionOne: {
      votes: [],
      text: 'be telekinetic',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be telepathic'
    }
  },
  "loxhs1bqm25b708cmbf3g": {
    id: 'loxhs1bqm25b708cmbf3g',
    author: 'tylermcginnis',
    timestamp: 1482579767190,
    optionOne: {
      votes: [],
      text: 'be a front-end developer',
    },
    optionTwo: {
      votes: ['sarahedo'],
      text: 'be a back-end developer'
    }
  },
  "vthrdm985a262al8qx3do": {
    id: 'vthrdm985a262al8qx3do',
    author: 'tylermcginnis',
    timestamp: 1489579767190,
    optionOne: {
      votes: ['tylermcginnis'],
      text: 'find $50 yourself',
    },
    optionTwo: {
      votes: ['johndoe'],
      text: 'have your best friend find $500'
    }
  },
  "xj352vofupe1dqz9emx13r": {
    id: 'xj352vofupe1dqz9emx13r',
    author: 'johndoe',
    timestamp: 1493579767190,
    optionOne: {
      votes: ['johndoe'],
      text: 'write JavaScript',
    },
    optionTwo: {
      votes: ['tylermcginnis'],
      text: 'write Swift'
    }
  },
}

function generateUID () {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

export function _getUsers () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...users}), 1000)
  })
}

export function _getQuestions () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...questions}), 1000)
  })
}

function formatQuestion ({ optionOneText, optionTwoText, author }) {
  return {
    id: generateUID(),
    timestamp: Date.now(),
    author,
    optionOne: {
      votes: [],
      text: optionOneText,
    },
    optionTwo: {
      votes: [],
      text: optionTwoText,
    }
  }
}

export function _saveQuestion (question) {
  return new Promise((res, rej) => {
    const authedUser = question.author;
    const formattedQuestion = formatQuestion(question);

    setTimeout(() => {
      questions = {
        ...questions,
        [formattedQuestion.id]: formattedQuestion
      }
      
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          questions: users[authedUser].questions.concat([formattedQuestion.id])
        }
      }

      res(formattedQuestion)
    }, 1000)
  })
}

export function _saveQuestionAnswer ({ authedUser, qid, answer }) {
  return new Promise((res, rej) => {
    setTimeout(() => {
      users = {
        ...users,
        [authedUser]: {
          ...users[authedUser],
          answers: {
            ...users[authedUser].answers,
            [qid]: answer
          }
        }
      }

      questions = {
        ...questions,
        [qid]: {
          ...questions[qid],
          [answer]: {
            ...questions[qid][answer],
            votes: questions[qid][answer].votes.concat([authedUser])
          }
        }
      }

      res()
    }, 500)
  })
}
