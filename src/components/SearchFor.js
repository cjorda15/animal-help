import React, { Component } from 'react';

class SearchFor extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <form className="form-section">
        <button>find a pet</button>
        <button>find a shelter</button>
      </form>
    );
  }
}

export default SearchFor;
