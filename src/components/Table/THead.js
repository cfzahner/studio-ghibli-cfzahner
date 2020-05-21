function createTableHeaders () {
  return `
    <th>No headers sent yet!</th>
  `
}

export default () => `
  <thead>
    <tr>
      ${createTableHeaders()}
    </tr>
  </thead>
`
