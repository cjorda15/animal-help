import React, { Component } from 'react';
import SearchForPets from './SearchForPets';
import SearchForShelter from './SearchForShelter';
import { updateAnimalList } from '../actions';
import { connect } from 'react-redux';

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

  submitSearch() {
    const { checked, animal, size, sex, age, location } = this.state;
    if (checked == 'pets') {
      fetch(
        `pets/?animal=${animal}&size=${size}&sex=${sex}&age=${age}&location=${location}`
      )
        .then(val => val.json())
        .then(val => this.props.handleAnimalList(val.petfinder.pets.pet))
        .catch(err => console.log(err, '???'));
    } else {
      fetch('shelters')
        .then(val => val.json())
        .then(val => console.log(val, '!!!'))
        .catch(err => console.log(err, '???'));
    }
  }

  handleOptionChange(e) {
    this.setState({
      checked: e.target.value,
      animal: 'any',
      size: 'any',
      sex: 'both',
      age: 'any',
      location: ''
    });
  }

  showForm() {
    return this.state.checked === 'pets' ? (
      <SearchForPets
        state={this.state}
        setState={this.setState.bind(this)}
        handleClick={this.submitSearch.bind(this)}
      />
    ) : (
      <SearchForShelter
        state={this.state}
        setState={this.setState.bind(this)}
        handleClick={this.submitSearch.bind(this)}
      />
    );
  }

  render() {
    return (
      <section className="search-form-wrapper">
        <div className="section-form-container">
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
              <span>find a pet</span>
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
              <span>find a shelter</span>
              <br />
            </label>
          </form>
          {this.showForm()}
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleAnimalList: input => {
      dispatch(updateAnimalList(input));
    }
  };
};

export default connect(null, mapDispatchToProps)(SearchFor);
