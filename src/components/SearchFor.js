import React, { Component } from 'react';
import SearchForPets from './SearchForPets';
import SearchForShelter from './SearchForShelter';

class SearchFor extends Component {
  constructor() {
    super();
    this.state = {
      checked: 'pets',
      animal: 'any',
      size: 'any',
      sex: 'both',
      age: 'any',
      location: ''
    };
  }

  handleOptionChange(e) {
    this.setState({ checked: e.target.value });
  }

  showForm() {
    return this.state.checked === 'pets' ? (
      <SearchForPets state={this.state} setState={this.setState.bind(this)} />
    ) : (
      <SearchForShelter state={this.state} />
    );
  }

  render() {
    return (
      <section>
        <form>
          <label>
            <input
              type="radio"
              name="gender"
              value="pets"
              checked={this.state.checked == 'pets'}
              onChange={e => {
                this.handleOptionChange(e);
              }}
            />
            find a pet
            <br />
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="shelter"
              checked={this.state.checked == 'shelter'}
              onChange={e => {
                this.handleOptionChange(e);
              }}
            />
            find a shelter
            <br />
          </label>
        </form>
        {this.showForm()}
      </section>
    );
  }
}

export default SearchFor;
