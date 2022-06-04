import { describe, it, expect, vi } from 'vitest'
import { createStore, Store } from 'vuex'
import { shallowMount } from '@vue/test-utils'
import Gallery from '../Gallery.vue'

describe('Gallery.vue', () => {
  const store = createStore({
    state() {
      return {
        presentations: [{
          "name": "Akan Murat Cimen",
          "email": "akan.murat.cimen@1337.tech",
          "phoneNumber": "076-1337198",
          "office": "Lund",
          "manager": "jim@1337.tech",
          "orgUnit": "/Employees",
          "mainText": "<p>It has always been appealing to me to try to understand everything from the big bang to AI-suggested cat videos by asking the what, why, and how questions. If I ask the right questions at the right time, in the right order, I believe everything has an answer. The knowledge we have learned as human beings so far by asking these questions is an invaluable treasure.</p><p>I have been demanding some operations from CPUs since I was a kid. I worked on various projects like e-commerce, content management systems, car sharing, live streaming etc. with various programming languages. I think the true \"legacy code\" is not about how old it is, it's about its readability, maintainability etc. I'm trying not to be that person who writes code like that.</p><p>In my spare time I'm demanding more operations from CPUs by playing games, watching movies, tv-series or traveling with the help of a navigation application.</p> ",
          "gitHub": "akanmuratcimen",
          "twitter": null,
          "stackOverflow": "513234",
          "linkedIn": "/in/akanmuratcimen/",
          "imagePortraitUrl": "https://i.1337co.de/profile/akan-murat-cimen",
          "imageWallOfLeetUrl": "https://i.1337co.de/wallofleet/akan-murat-cimen",
          "highlighted": false,
          "published": true
      },]
      }
    },
  })
  const wrapper = shallowMount(Gallery, {store})

  it('renders properly', () => {
    expect(wrapper.html()).toBeTruthy()
  })

  it('displays the card container', () => {
    const cardcontainer = wrapper.find('.cardContainer')
    expect(cardcontainer.html()).toBeTruthy()
  })

  it('matches a snapshot', () => {
    expect(wrapper.html()).toMatchSnapshot()
  })
})
