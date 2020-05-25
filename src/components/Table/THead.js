// create a function to map to headings to create a heading in a th tag. Join created headings.

function createTableHeaders (headings) {
  return headings.map(heading => `
  <th>${heading}</th>
  `).join(' ')
}

// export created header function and export headers in tr tag wrapped in thead.

export default (headers) => `
  <thead class="header">
    <tr>
      ${createTableHeaders(headers)}
    </tr>
  </thead>
`
