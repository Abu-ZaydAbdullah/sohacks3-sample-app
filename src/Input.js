import React, { Component } from 'react';

export default class Input extends Component {
  render() {
    const style = { margin: 20 };
    return (
      <div>
        <form onSubmit={this.submit.bind(this)}>
          <input style={style} ref={i=>{this.input = i}} />
        </form>
      </div>
    );
  }
  submit(e) {
    e.preventDefault();
    this.props.onUpdate(this.input.value);
  }
}
Input.propTypes = {
  onUpdate: React.PropTypes.func.isRequired
};
