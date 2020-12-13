

// Get All
export function setServices (state, data) {
  state.services = data
}

// Get One
export function setService (state, data) {
  state.service = data
}

// Add
export function pushServices (state, data) {
  state.services.splice(0, 0, data.data)
}


export const setStatus = (state, status ) => {
  // state.services = status
}

