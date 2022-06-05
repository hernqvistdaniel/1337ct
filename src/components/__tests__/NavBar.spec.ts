import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import NavBar from '../NavBar.vue'

describe('GalleryCard.vue', () => {
  const wrapper = shallowMount(NavBar, { props: {} })

  it('renders properly', () => {
    expect(wrapper.html()).toBeTruthy()
  })

  it('matches a snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})