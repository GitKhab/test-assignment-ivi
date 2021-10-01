const state = () => ({
  hover: false
})

const mutations = {
  switchOffHoverStatus(state) {
    state.hover = false
  },
  switchOnHoverStatus(state) {
    state.hover = true
  }
}

export default {
  state,
  mutations
}
