const fs = require('fs')
const path = require('path')
const { getCwd } = require('./utils')

function init(directories) {
  const pageImport = []
  const pageExport = []

  directories.forEach(e => {
    pageImport.push(`import ${e} from '../pages/${e}';`)
    pageExport.push(`\t${e}: ${e},`)
  })

  const writeToFile = [
    "// this file is created by './scripts/get-pages.js' and used in App.js\n",
    pageImport.join('\n'),
    '\nconst pages = {',
    pageExport.join('\n'),
    '}\n',
    'export default pages\n',
  ].join('\n')

  fs.writeFileSync(path.join(__dirname, '../', 'src/data/pages.js'), writeToFile)
}

const [, , ...args] = process.argv
const directories = getCwd(args[0]).dirs

init(directories)
