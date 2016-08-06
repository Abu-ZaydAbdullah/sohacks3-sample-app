import React, { Component } from 'react';
import './App.css';
import Giphy from './Giphy';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      terms: ['cat']
    }
    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    const giphys = this.getGiphys();
    return (
      <div className="App">
        <h1>My Cool New App</h1>
        <Input onUpdate={this.handleChange} />
        {giphys}
      </div>
    );
  }
  handleChange(value) {
    if (value) {
      this.setState({
        terms: this.state.terms.concat([value])
      });
    }
  }
  getGiphys() {
    return this.state.terms.map((term, index) => (
      <Giphy defaultTag={term} key={index} />
    )).reverse();
  }
}

export default App;
