// TODO: Get 'stuff' from STATE and get this table built
function createTableBody (dataSet, keys) {
  dataSet.map(data => {
    keys.map((key) => {
      console.log(data[key])
    })
  })

  return `
    <tr>
      <td></td>
      <td></td>

    </tr>
  `
}

export default (stuff, propKeys) => `
  <tbody>
    ${createTableBody(stuff, propKeys)}
  </tbody>
`
