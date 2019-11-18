import store from 'store'

export default {
  namespace: 'commonSpace',
  state: {
    guidance: store.get('guidance') ||  false
  },
  reducers: {
    handleGuidanceChange(state, { payload }) {
      store.set('guidance', payload)
      return {
        ...state,
        guidance: payload
      }
    }
  }
}