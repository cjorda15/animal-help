import React from 'react';
import { connect } from 'react-redux';
import Animals from './Animals';

const AnimalList = ({ animals }) => {
  const animalListContent = () => {
    if (!animals) return null;
    return animals.map((data, i) => <Animals data={data} key={i} />);
  };

  return (
    <section className="animal-list-container">{animalListContent()}</section>
  );
};

const mapStateToProps = state => {
  return {
    animals: state.animals
  };
};

export default connect(mapStateToProps)(AnimalList);
