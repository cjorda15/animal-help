import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import OptionalOptions from './OptionalOptions';

const SearchForPets = ({ setState, state }) => {
  return (
    <div>
      <Autocomplete
        style={{ width: '90%' }}
        onPlaceSelected={place => {
          console.log(place.formatted_address, '!!!!!!!!!!');
        }}
        types={['(regions)']}
        componentRestrictions={{ country: 'usa' }}
      />
      <p>optional search criteria</p>
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
      <button>submit</button>
    </div>
  );
};

export default SearchForPets;
