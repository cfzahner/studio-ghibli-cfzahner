function createTableHeaders (headings) {
  return headings.map(heading => `
  <th>${heading}</th>
  `).join('')
}

export default (headers) => `
  <thead>
    <tr>
      ${createTableHeaders(headers)}
    </tr>
  </thead>
`
