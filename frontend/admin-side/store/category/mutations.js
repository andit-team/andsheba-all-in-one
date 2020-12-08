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
