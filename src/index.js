import { getStudioGhibliStuff } from './api'

import * as components from './components'
import fetch from 'fetch'

// '#root' is the 'mounting point' for our app inside of './index.html'
const root = document.querySelector('#root')
const state = {
  Table: {
    // This will update based on 'components.Radio' - defaults to 'films
    activeStuff: 'films',
    data_keys: {
      films: ['title', 'director', 'release date'],
      people: ['name', 'gender', 'age'],
      locations: ['name', 'climate', 'terrain'],
      species: ['name', 'eye_colors', 'hair_colors'],
      vehicles: ['name', 'vehicle_class', 'length']
    },
    headers: {
      films: ['Title', 'Director', 'Release Date'],
      people: ['Name', 'Gender', 'Age'],
      locations: ['Name', 'Climate', 'Terrain'],
      species: ['Name', 'Eye Colors', 'Hair Colors'],
      vehicles: ['Name', 'Vehicle Class', 'Length']
    },
    stuff: []
  }
}

// 'state' is DEFAULT VALUE for NAMED PARAMETER 'st'
const render = (st = state) => {
  // 'innerHTML' will be updated with the HTML 'return'ed from the FUNCTIONAL COMPONENTS.
  root.innerHTML = `
      ${components.Radio()}
      ${components.Table(st.Table)}
      `

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('click', function () {
      this.value = state.Table.activeStuff
      const grabURL = async () => {
        const response = await window.fetch('https://ghibliapi.herokuapp.com/films/')
        return response.json()
      }
      grabURL()
        .then(data => console.log(data))
    })
  })
}
// i want to get studio gbili stuff and get the activestuff
(async () => {
  state.Table.stuff = await getStudioGhibliStuff(state.Table.activeStuff)
  render()
})()
