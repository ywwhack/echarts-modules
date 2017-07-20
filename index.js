const fs = require('fs')
const path = require('path')

const ROOT_PATH = process.cwd()
const BASE_PATH = path.resolve(ROOT_PATH, 'node_modules/echarts/lib')
const TRAVALSE_DIRS = ['chart', 'component']

const echartsModules = {}
TRAVALSE_DIRS.forEach(dir => {
  const files = fs.readdirSync(path.resolve(BASE_PATH, dir))
  const dirModules = echartsModules[dir] = echartsModules[dir] || []
  files.forEach(file => {
    if (file.slice(-3) === '.js') {
      dirModules.push(file.slice(0, -3))
    }
  })
})

module.exports = echartsModules
