

// Push a new service to services state
export function setServices (state, data) {
  state.services.push(data)
}

export const setStatus = (state, status ) => {
  state.services = status
}

