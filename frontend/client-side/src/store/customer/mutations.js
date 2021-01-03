export const setCustomer = (state, customer) => {
    state.customer = {
        ...state.customer,
        ...customer
    }
}
