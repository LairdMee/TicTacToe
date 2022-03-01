import React, { Component } from 'react';
import Item from './components/Item';

export default class App2 extends Component {
  constructor(props) {
    super(props);
    console.log('constructor');
    this.state = {
      user: null,
      items: [
        'banana',
        'apple',
        'orange'
      ]
    }
  }

  async componentDidMount() {
    console.log('componentDidMount');
    // this.setState({
    //   user: {
    //     name: 'Veronica',
    //     age: 26,
    //   }
    // });
    const res = await fetch('https://randomuser.me/api/');
    const data = await res.json();
    const randomUser = data.results[0];
    this.setState({user: randomUser});
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate', prevState, this.state);
  }

  removeItem(index) {
    console.log(index);
    const items = [...this.state.items];
    items.splice(index, 1);
    console.log(items);
    this.setState({
      items: items,
    })
  }

  render() {
    console.log('render');
    return (
      <div>
        App 2
        { this.state.items.map((item, index) => {
          return <Item value={item} key={item} click={() => this.removeItem(index)} />
        })}
      </div>
    )
  }
}
