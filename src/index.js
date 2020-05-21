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
      films: ['title', 'director', 'release date'],
      people: ['name', 'gender', 'age'],
      locations: ['name', 'climate', 'terrain'],
      species: ['name', 'eye_colors', 'hair_colors'],
      vehicles: ['name', 'vehicle_class', 'length']
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
    input.addEventListener('change', async function () {
      console.log(this.value)

      // update Table.activeStuff with 'this value'
      // make the correct api call
    })
  })
}
// i want to get studio gbili stuff and get the activestuff
(async () => {
  state.Table.stuff = await getStudioGhibliStuff(state.Table.activeStuff)
  render()
})()
