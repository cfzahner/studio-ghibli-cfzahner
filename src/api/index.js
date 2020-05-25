// fetch data and convert to json. Watch (catch) for an error, throw if there is an error.

export const getStudioGhibli = async (stuff) => {
  try {
    const response = await window.fetch('https://ghibliapi.herokuapp.com{stuff}')

    return response.json()
  } catch (error) {
    throw Error(error)
  }
}
