import React, { Component } from 'react';
import { stringify } from 'querystring';

export default class Giphy extends Component {
  constructor() {
    super();
    this.state = {
      src: false
    };
  }

  componentDidMount() {
    this.setTag(this.props.defaultTag);
  }

  render() {
    const src = this.state.src;
    return src ? <img src={src} alt="giphy" /> : null;
  }

  setTag(value) {
    const urlParams = {
      api_key: 'dc6zaTOxFJmzC',
      tag: value
    };
    const url = `http://api.giphy.com/v1/gifs/random?${stringify(urlParams)}`;
    const fetchOptions = {
      mode: 'cors',
      headers: { 'Accept': 'application/json' }
    };
    fetch(url, fetchOptions)
      .then(response => response.json())
      .then(json => this.setState({ src: json.data.image_url }))
      .catch(console.error);
  }
}
Giphy.propTypes = {
  defaultTag: React.PropTypes.string
}
Giphy.defaultProps = {
  defaultTag: 'cat'
}
