import { getStudioGhibliStuff } from './api'

import * as components from './components'
import 'bulma/css/bulma.min.css'
// import './style.css'

import fetch from 'fetch'

// '#root' is the 'mounting point' for our app inside of './index.html'
const root = document.querySelector('#root')
const state = {
  Table: {
    // This will update based on 'components.Radio' - defaults to 'films
    activeStuff: 'films',
    dataKeys: {
      films: ['title', 'director', 'release_date'],
      people: ['name', 'gender', 'age'],
      locations: ['name', 'climate', 'terrain'],
      species: ['name', 'eye_colors', 'hair_colors'],
      vehicles: ['name', 'class', 'length']
    },
    headers: {
      films: ['Title', 'Director', 'Release Date'],
      people: ['Name', 'Gender', 'Age'],
      locations: ['Name', 'Climate', 'Terrain'],
      species: ['Name', 'Eye Colors', 'Hair Colors'],
      vehicles: ['Name', 'Class', 'Length']
    },
    stuff: []
  }
}

// 'state' is DEFAULT VALUE for NAMED PARAMETER 'st'
const render = (st = state) => {
  // 'innerHTML' will be updated with the HTML 'return'ed from the FUNCTIONAL COMPONENTS.

  // accessing the root element and updating whats in it (html), refer to empty>< in html.index.
  root.innerHTML = `
      ${components.Radio()}
      ${components.Table(st.Table)}
      `

  document.querySelectorAll('input').forEach(input => {
    input.addEventListener('click', function () {
      state.Table.activeStuff = this.value
      renderDataFromAPI()
      render()

      document.querySelector(`#${state.Table.activeStuff}`).checked = true
    })
  })
}
async function renderDataFromAPI () {
  try {
    state.Table.stuff = await getStudioGhibliStuff(state.Table.activeStuff)
    render()
  } catch (error) {
    console.error(error)
  }
}
renderDataFromAPI()
