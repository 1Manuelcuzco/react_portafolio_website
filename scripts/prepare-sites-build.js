const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const buildDir = path.join(root, 'build')
const distDir = path.join(root, 'dist')
const clientDir = path.join(distDir, 'client')
const serverDir = path.join(distDir, 'server')

if (!fs.existsSync(path.join(buildDir, 'index.html'))) {
  throw new Error('Primero debe completarse la compilación de React.')
}

fs.rmSync(distDir, { recursive: true, force: true })
fs.mkdirSync(serverDir, { recursive: true })
fs.cpSync(buildDir, clientDir, { recursive: true })
fs.copyFileSync(path.join(root, 'scripts', 'sites-worker.js'), path.join(serverDir, 'index.js'))
