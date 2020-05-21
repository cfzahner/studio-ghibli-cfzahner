// NAMED EXPORT
export const getStudioGhibliStuff = async (stuff) => {
  const resp = await window.fetch(`https://ghibliapi.herokuapp.com/${stuff}`)
  return resp.json()
}
