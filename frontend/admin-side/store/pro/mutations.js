

// Get All
export function setPros (state, data) {
  state.pros = data
}

// Get One
export function setPro (state, data) {
  state.pro = data
}

// Add
export function pushPros (state, data) {
  state.pros.splice(0, 0, data.data)
}


export const setStatus = (state, status ) => {
  // state.pros = status
}

