import React from 'react';
import Autocomplete from 'react-google-autocomplete';

const SearchForShelter = () => {
  return (
    <div>
      <Autocomplete
        style={{ width: '90%' }}
        onPlaceSelected={place => {
          // console.log(place.formatted_address, '!!!!!!!!!!');
        }}
        types={['(regions)']}
        componentRestrictions={{ country: 'usa' }}
      />
      <button>submit</button>
    </div>
  );
};

export default SearchForShelter;
