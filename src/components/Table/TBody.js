// TODO: Get 'stuff' from STATE and get this table built
function createTableBody (dataSet, keys) {
  return dataSet.map(data => `
  <tr>
  ${createTableData(data, keys)}
  </tr>
  `
  ).join('')
}

function createTableData (data, keys) {
  return keys.map((key) => `
  <td>${data[key]}</td>
  `).join('')
}

export default (stuff, propKeys) => `
  <tbody>
    ${createTableBody(stuff, propKeys)}
  </tbody>
`
