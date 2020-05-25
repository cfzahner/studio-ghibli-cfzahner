// create a function for table body that passes the arguments dataSet and keys to map over data in tableData to return data and keys to then be joined.

function createTableBody (dataSet, keys) {
  return dataSet.map(data => `
  <tr class="data">
  ${createTableData(data, keys)}
  </tr>
  `)
    .join('')
}

// create a function for tableData to map to access keys from data to then join.

function createTableData () {
  return keys.map((key) => `
  <td>${data[key]}</td>
  `).join('')
}
