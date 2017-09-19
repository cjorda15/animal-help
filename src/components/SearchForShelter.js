import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const SearchForShelter = ({ setState, handleClick }) => {
  return (
    <div>
      <Autocomplete
        style={{ width: '90%' }}
        onPlaceSelected={place => {
          setState({ location: place.formatted_address });
        }}
        types={['(regions)']}
        componentRestrictions={{ country: 'usa' }}
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
