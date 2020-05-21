import { getStudioGhibliStuff } from './api'

import * as components from './components'

// '#root' is the 'mounting point' for our app inside of './index.html'
const root = document.querySelector('#root')

const state = {
  Table: {
    // This will update based on 'components.Radio' - defaults to 'films
    activeStuff: 'films',
    headers: {
      // TODO: Check out the data at: https://ghibliapi.herokuapp.com/
      // Pick 3 properties from each set and make those the 'headers'
      films: [],
      people: [],
      locations: [],
      species: [],
      vehicles: []
    },
    stuff: []
  }
}

// 'state' is DEFAULT VALUE for NAMED PARAMETER 'st'
const render = (st = state) => {
  console.info(st)
  // 'innerHTML' will be updated with the HTML 'return'ed from the FUNCTIONAL COMPONENTS.
  root.innerHTML = `
    ${components.Radio()}
    ${components.Table(st.Table)}
  `

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('change', function () {
      console.log(this.value)
    })
  })
}

(async () => {
  state.Table.stuff = await getStudioGhibliStuff(state.Table.activeStuff)
  render()
})()
