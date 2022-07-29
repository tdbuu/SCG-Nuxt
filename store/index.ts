interface IState {
    counter: number;
}

export const state = () => ({
    counter: 0
  })
  
  export const getters = {
    getCounter(state: IState) {
      return state.counter
    }
  }
  
  export const mutations = {
    increment(state: IState) {
      state.counter++
    }
  }
  
  export const actions = {
    async fetchCounter(state: IState) {
      // make request
      const res = { data: 10 };
      state.counter = res.data;
      return res.data;
    }
  }