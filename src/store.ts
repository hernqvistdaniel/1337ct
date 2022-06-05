import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import type { Presentation } from '@/models/presentation';
import axios from 'axios';
import config from './config.ts'

export interface State {
  presentations: Presentation[]
}

export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  state() {
    return {
      presentations: []
    }
  },
  getters: {
    getPresentations(state) {
      return state.presentations
    },
  },
  mutations: {
    savePresentations(state, presentations) {
      state.presentations = presentations
    }
  },
  actions: {
    async fetchPresentations({commit}) {
      try {
        const response = await axios.get('https://api.1337co.de/v3/employees', {
          headers: {
            Accept: 'application/json',
            Authorization: config.API_KEY
          }
        })
        if(response.status === 200) {
          this.commit('savePresentations', response.data)
        }  
      } catch(e) {
        // display error
        console.log(e)
      }
    }
  }
})