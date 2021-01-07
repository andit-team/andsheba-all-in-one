export const setCustomer = (state, customer) => {
    state.customer = {
        ...state.customer,
        ...customer
    }
}

export const setOrders = (state, orders) => {
    state.orders = orders
}

export const setOrder = (state, order) => {
    state.order = order
}
