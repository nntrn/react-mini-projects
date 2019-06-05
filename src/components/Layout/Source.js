/*
 * i is the length of the arrays we are merging (rows)
 * j is the number of attributes for each object(cols)
 */
export function makeObjArr(arr) {
  if (arr) {
    let keys = Object.keys(arr),
      values = Object.values(arr)

    arr = []
    for (let i = 0; i < values[0].length; i++) {
      let obj = {}
      for (let j = 0; j < keys.length; j++) {
        obj[keys[j]] = values[j][i]
      }
      arr.push(obj)
    }
    return arr
  }
  // TODO: handle null TypeError for makeObjArr()
  // send back an empty array to avoid typeerrors when using map() (Layout.js)
  return ['']
}

export const references = {
  todo: {
    title: [
      'Yet another To-Do list app. This time with react-transition-group by Yevhenii Herasymchuk',
      'React Todo List, Pen by Fumie Wada',
      'React Todo List, Pen by Tien Do',
      'A Todo List by Inclusive Components'
    ],
    url: [
      'https://codeburst.io/yet-another-to-do-list-app-this-time-with-react-transition-group-7d2d1cdf37fd',
      'https://codepen.io/hotate17/pen/oYKMaM',
      'https://codepen.io/Tiendq/pen/jrZAWk',
      'https://inclusive-components.design/a-todo-list/'
    ]
  },
  confetti: {
    title: ['react-confetti'],
    url: ['https://github.com/alampros/react-confetti']
  }
}

const source = [
  {
    id: 0,
    title: 'Todo',
    url: '/todo',
    references: makeObjArr(references.todo)
  },
  {
    id: 1,
    title: 'Confetti',
    url: '/confetti',
    references: makeObjArr(references.confetti)
  }
]
export default source
