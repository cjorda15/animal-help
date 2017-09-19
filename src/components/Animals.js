import React from 'react';

const Animals = ({ data }) => {
  const cleanData = input => {
    const key = Object.keys(input);
    return input[key];
  };

  const animalCard = () => {
    return (
      <div className="animal-card">
        <img src={data.media.photos.photo[2].$t} />
        <p>{data.name.$t}</p>
        <p>sex: {data.sex.$t}</p>
        <p>size: {data.size.$t}</p>
        <p>
          located: {data.contact.address1.$t},{data.contact.city.$t},{' '}
          {data.contact.state.$t}, {data.contact.zip.$t}{' '}
        </p>
        <p>contact: {data.contact.phone.$t}</p>
        <p>{data.description.$t}</p>
      </div>
    );
  };

  const validCard = () => {
    return data.media.photos ? animalCard() : null;
  };

  return validCard();
};

export default Animals;
