import React, { Component } from 'react'

import HelloComponent from './components/HelloComponent';

export default class index extends Component {
  render() {
    return (
      <HelloComponent
        textMessage='Hello Guy'
      />
    )
  }
}
