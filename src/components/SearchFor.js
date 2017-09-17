import React, { Component } from 'react';
import Autocomplete from 'react-google-autocomplete';

class SearchFor extends Component {
  constructor() {
    super();
    this.state = {
      checked: 'pets'
    };
  }

  handleOptionChange(e) {
    this.setState({ checked: e.target.value });
  }

  searchShelter() {
    return (
      <div>
        <p>asdfasdf</p>
        <Autocomplete
          style={{ width: '90%' }}
          onPlaceSelected={place => {
            console.log(place.formatted_address, '!!!!!!!!!!');
          }}
          types={['(regions)']}
          componentRestrictions={{ country: 'ru' }}
        />
      </div>
    );
  }

  searchPets() {
    return (
      <div>
        <p>boo</p>
        <Autocomplete
          style={{ width: '90%' }}
          onPlaceSelected={place => {
            console.log(place.formatted_address, '!!!!!!!!!!');
          }}
          types={['(regions)']}
          componentRestrictions={{ country: 'usa' }}
        />
      </div>
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
        {this.state.checked === 'pets' ? (
          this.searchPets()
        ) : (
          this.searchShelter()
        )}
      </section>
    );
  }
}

export default SearchFor;
