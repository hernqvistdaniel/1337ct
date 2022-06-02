import type { InjectionKey } from 'vue'
import { createStore, Store } from 'vuex'
import type { Presentation } from '@/models/presentation';
import axios from 'axios';

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
  actions: {
    async getPresentations() {
      const url = process.env.BASE_URL
      const key = process.env.API_KEY
      const response = await axios.get('https://api.1337co.de/v3/employees', {
        headers: {
          Authorization: key
        }
      })
      if(response.status === 200) {
        this.commit('presentations', response.data)
      }
    }
  }
 
})