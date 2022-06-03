import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { store } from '../store.js'

describe('GalleryCard.vue', () => {
  const wrapper = shallowMount(store, { props: {} })

  it('renders properly', () => {
    expect(wrapper.html()).toBeTruthy()
  })

  it('logs', () => {
    console.log(wrapper.html())
  })
})