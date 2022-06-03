import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import GalleryCard from '../GalleryCard.vue'

describe('GalleryCard.vue', () => {
  const wrapper = shallowMount(GalleryCard, { props: {} })

  it('renders properly', () => {
    expect(wrapper.html()).toBeTruthy()
  })

  it('logs', () => {
    console.log(wrapper.html())
  })
})