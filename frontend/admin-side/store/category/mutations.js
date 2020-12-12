// Fetched All data Storing in state
export function fetchAll (state, data) {
  state.categories = data
}
// Fetched Single data Storing in state
export function fetchOne (state, data) {
  state.category = data
}

// Push a new data to Categories state
export function add (state, data) {
  state.categories.push(data)
}

export const filterCategories = (state, id ) => {
  state.categories = state.categories.filter(item => item._id !== id)
}
