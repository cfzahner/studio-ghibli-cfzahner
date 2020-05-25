// create a function to map to headings to create a heading in a th tag. Join created headings.

function createTableHeaders (headings) {
  return headings.map(heading => `
  <th>${heading}</th>
  `).join(' ')
}
