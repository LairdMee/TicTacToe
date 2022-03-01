import React, { Component } from 'react'

export default class Item extends Component {

  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    return (
      <div onClick={this.props.click}>
        {this.props.value}
      </div>
    )
  }
}
