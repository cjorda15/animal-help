import React from 'react';
import Autocomplete from 'react-google-autocomplete';
import OptionalOptions from './OptionalOptions';

const SearchForPets = ({ setState }) => {
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
      />
      <OptionalOptions
        options={['any', 'S', 'M', 'L', 'XL']}
        type="size"
        setState={setState}
      />
      <OptionalOptions
        options={['both', 'M', 'F']}
        type="sex"
        setState={setState}
      />
      <OptionalOptions
        options={['any', 'baby', 'young', 'adult', 'senior']}
        type="age"
        setState={setState}
      />
      <button>submit</button>
    </div>
  );
};

export default SearchForPets;
