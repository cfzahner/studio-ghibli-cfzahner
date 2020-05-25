import { getStudioGhibli } from './api'
import * as components from './components'

const root = document.querySelector('#root')
const state = {
  Table: {
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
// whats in the render car?...find root and access innerHtml to grab radios and table data from st.Table

const render = (st = state) => {
  root.innerHTML = `
  ${components.Radio}
  ${components.Table(st.Table)}`
}
