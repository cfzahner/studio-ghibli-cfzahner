// NAMED EXPORT
export const getStudioGhibliStuff = async (stuff) => {
  try {
    const resp = await window.fetch(`https://ghibliapi.herokuapp.com/${stuff}`)

    return resp.json()
  } catch (error) {
    throw Error(error)
  }
}
