import * as PIXI from 'pixi.js'

const width = 600
const height = 700

window.onload = function(){
  setup()
}
function setup(){
  const App = makeApp()
}
const makeApp= () => {
  const app = new PIXI.Application(
    {
      width: width,
      height: height,
      backgroundColor: 0xcccccc
    }
  )
  document.body.appendChild(app.view)
  return app
}

