import { describe, it, expect } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import Gallery from '../Gallery.vue'

describe('Gallery.vue', () => {
  const wrapper = shallowMount(Gallery, { props: {
    presentations: [
      {
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
    },
    {
        "name": "Alban Nurkollari",
        "email": "alban.nurkollari@1337.tech",
        "phoneNumber": "+46768133799",
        "office": "Helsingborg",
        "manager": "andreas.nilsson@1337.tech",
        "orgUnit": "/Employees",
        "mainText": "<p>My friends and colleagues describe me as a friendly, helping, adapting, energetic and most of all focus-oriented person.</p><p>I embrace programming with creativity and try to provide best practices and logic. I value diversity among peers and respect them utmost.</p>  ",
        "gitHub": "albannurkollari",
        "twitter": "VennBani",
        "stackOverflow": "5453170",
        "linkedIn": "/in/albannurkollari/",
        "imagePortraitUrl": "https://i.1337co.de/profile/alban-nurkollari",
        "imageWallOfLeetUrl": "https://i.1337co.de/wallofleet/alban-nurkollari",
        "highlighted": false,
        "published": true
    }
    ]
  } })

  it('renders properly', () => {
    expect(wrapper.html()).toBeTruthy()
  })

  it('logs', () => {
    console.log(wrapper.html())
  })
})
