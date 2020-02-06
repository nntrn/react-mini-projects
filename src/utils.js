export function parseDate(str, options = {}) {
  return new Date(Date.parse(str)).toLocaleString('en-US', options)
}

function each(arr, fn) {
  return arr.map(fn)
}

const stringMethods = {
  capitalize: str => String(str).replace(/\b[a-z]/g, e => e.toUpperCase()),
  list: (...args)=> args.filter(Boolean).join(' ').trim(' '),
}

const isValid = {
  test: function () {
    const score = [].map.call([...arguments], el => (el && true) || false)
    return score.indexOf(false) === -1 ? true : false
  },
  validArray: function (el) {
    return this.test(Array.isArray(el), el.length)
  },
  validString: function (el) {
    return this.test(el, typeof el === 'string', el.length, !(/false/i.test(el)))
  },
  validNumber: function (el) {
    return this.test(typeof el === 'number', Boolean(el))
  },
  validObject: function (el) {
    return this.test(Object.keys(el).length, el.toString() === '[object Object]')
  },
  validBoolean: function (el) {
    return this.test(typeof el === 'boolean', Boolean(el))
  },
  checkAll: function (el) {
    const results = [
      this.validArray(el),
      this.validString(el),
      this.validNumber(el),
      this.validObject(el),
      this.validBoolean(el),
    ]
    return results
  },
}

/**
 * @description get first valid argument passed that's not null or empty
 * @example
 *   grabFirst('',[],{},3)     // 3
 *   grabFirst(0,'false',[],8) // 8
 */
function grabFirst() {
  const args = [...arguments].filter(Boolean)

  for (let x = 0; x < args.length; x++) {
    if (isValid.checkAll(args[x]).indexOf(true) > -1) {
      return args[x]
    }
  }
  return ''
}

/**
 * @description replace string with object variables
 * @example
 *   stringReplacer('api.github.com/{type}/{user}', { user: 'nntrn', type:'users' })
 *   // api.github.com/users/nntrn
 */
function stringReplacer(string, param = {}) {
  Object.keys(param).forEach(e => {
    string = string.replace(RegExp(`{${e}}`, 'g'), param[e])
  })
  return string
}

function addDb(name, key, value) {
  let db = JSON.parse(localStorage.getItem(name)) || []

  db.push({ key, value })
  localStorage.setItem(name, JSON.stringify(db))
}

function dataManager() {}

export {
  stringMethods,
  grabFirst,
  isValid,
  stringReplacer,
}
