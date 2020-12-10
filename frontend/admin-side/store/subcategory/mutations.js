

// Push a new data to Categories state
export function add (state, data) {
  state.sub_categories.push(data)
}

export const setSubCategories = (state, sub_categories ) => {
  state.sub_categories = sub_categories
}

export const filterSubCategories = (state, id ) => {
  state.sub_categories = state.sub_categories.filter(item => item._id !== id)
}
