import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import OptionalOptions from './OptionalOptions';

// <Autocomplete
// className="autocomplete-input"
// onPlaceSelected={place => {
//   setState({ location: place.formatted_address });
// }}
// types={['(regions)']}
// componentRestrictions={{ country: 'usa' }}
// />

const SearchForPets = ({ setState, state, handleClick }) => {
  return (
    <div id="search-for-pets-wrapper">
      <input
        className="zipcode-input"
        type="text"
        placeholder="zipcode"
        value={state.location}
        onChange={e => {
          setState({ location: e.target.value });
        }}
      />
      <p>Optional Search Criteria</p>
      <OptionalOptions
        options={[
          'any',
          'barnyard',
          'bird',
          'cat',
          'dog',
          'horse',
          'reptile',
          'smallfurry'
        ]}
        type="animal"
        setState={setState}
        state={state}
      />
      <OptionalOptions
        options={['any', 'S', 'M', 'L', 'XL']}
        type="size"
        setState={setState}
        state={state}
      />
      <OptionalOptions
        options={['both', 'M', 'F']}
        type="sex"
        setState={setState}
        state={state}
      />
      <OptionalOptions
        options={['any', 'baby', 'young', 'adult', 'senior']}
        type="age"
        setState={setState}
        state={state}
      />
      <button
        onClick={() => {
          handleClick();
        }}
      >
        submit
      </button>
    </div>
  );
};

export default SearchForPets;
