// Fetched data Storing in state
export function fetch (state, data) {
  state.categories = data
}

// Push a new data to Categories state
export function add (state, data) {
  state.categories.push(data)
}
