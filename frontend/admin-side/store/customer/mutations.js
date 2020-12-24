

// Get All
export function setCustomers (state, data) {
  state.customers = data
}

// Get One
export function setCustomer (state, data) {
  state.customer = data
}

// Add
export function pushCustomers (state, data) {
  state.customers.splice(0, 0, data.data)
}


export const setStatus = (state, status ) => {
  // state.customers = status
}

