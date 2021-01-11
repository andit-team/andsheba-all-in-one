export const setCustomer = (state, customer) => {
    state.customer = {
        ...state.customer,
        ...customer
    }
}

export const setOrders = (state, orders) => {
    state.orders = orders
}

export const setOrdersStatus = (state, status) => {
    state.ordersStatus = status
}

export const setOrder = (state, order) => {
    state.order = order
}

export const setDashboard = (state, dashboard) => {
    state.dashboard = dashboard
}
