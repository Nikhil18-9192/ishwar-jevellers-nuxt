export const state = () => ({
  collection: false,
})

export const getters = {
  getCollection: (state) => {
    return state.collection
  },
}

export const mutations = {
  toggleCollection(state) {
    state.collection = !state.collection
  },
}
