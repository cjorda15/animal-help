import React from 'react';
import Autocomplete from 'react-google-autocomplete';

// <Autocomplete
// className="autocomplete-input"
// onPlaceSelected={place => {
//   setState({ location: place.formatted_address });
// }}
// types={['(regions)']}
// componentRestrictions={{ country: 'usa' }}
// />

const SearchForShelter = ({ setState, handleClick, state }) => {
  return (
    <div id="search-for-shelter-wrapper">
      <input
        type="text"
        placeholder="zipcode"
        value={state.location}
        onChange={e => {
          setState({ location: e.target.value });
        }}
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

export default SearchForShelter;
