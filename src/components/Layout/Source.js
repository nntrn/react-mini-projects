// convert array of objects into one object
export function makeObjArr(arr) {
  if (arr) {
    let keys = Object.keys(arr),
      values = Object.values(arr)

    arr = []
    for (let i = 0; i < values[0].length; i++) {
      // i is array length (i.e., todos)
      let obj = {}
      for (let j = 0; j < keys.length; j++) {
        // j is the number of attributes in our object (i.e., title, url)
        obj[keys[j]] = values[j][i]
      }
      arr.push(obj)
    }
    return arr
  }
  // send back an empty array to avoid null value errors when working with functions like map()
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
    title: ['react-confetti', 'Burey on sololearn', 'Eloquent Javascript: Drawing on Canvas'],
    url: [
      'https://github.com/alampros/react-confetti',
      'https://code.sololearn.com/Wg7AAeBKzHaj/',
      'https://eloquentjavascript.net/17_canvas.html'
    ]
  },

  clock: {
    title: [
      'React Hooks Cheatsheet by @ohansemmanuel',
      'React Hooks cheat sheet: Unlock solutions to common problems',
      'A <Router /> with Hooks and Suspense',
      'Manage Global State with React Hooks',
      'Build a CRUD App in React with Hooks'
    ],
    url: [
      'https://react-hooks-cheatsheet.com/usecontext',
      'https://blog.logrocket.com/react-hooks-cheat-sheet-unlock-solutions-to-common-problems-af4caf699e70/',
      'https://frontarm.com/james-k-nelson/navi-react-router-hooks-suspense/',
      'https://medium.com/swlh/manage-global-state-with-react-hooks-b9e413a2c309',
      'https://taniarascia.github.io/react-hooks/'
    ]
  },
  weather: {
    title: ['AJAX Requests in React: How and Where to Fetch Data', 'weather.gov api'],
    url: [
      'https://daveceddia.com/ajax-requests-in-react/',
      'https://forecast-v3.weather.gov/documentation'
    ]
  },
  gitrepos: {
    title: ['Create a Node JS application for Downloading sources from GitHub'],
    url: [
      'https://technology.amis.nl/2018/03/18/create-a-node-js-application-for-downloading-sources-from-github/'
    ]
  }
  // new: {
  //   title: [],
  //   url: []
  // }
}

// create and return object array for all pages
const pages = Object.keys(references)
function sourcesObjectArray() {
  var arr = []
  pages.forEach((e, i) => {
    arr.push({
      id: i,
      title: e.charAt(0).toUpperCase() + e.slice(1),
      url: '/' + e,
      references: makeObjArr(references[e])
    })
  })
  return arr
}

const source = sourcesObjectArray()

export default source
