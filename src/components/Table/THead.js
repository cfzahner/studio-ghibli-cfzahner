function createTableHeaders (headings) {
  return headings.map(heading => `
  <th>${heading}</th>
  `).join(' ')
}

export default (headers) => `
  <thead class="header">
    <tr>
      ${createTableHeaders(headers)}
    </tr>
  </thead>
`
