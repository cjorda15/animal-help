import React, { Component } from 'react';

class Animals extends Component {
  constructor() {
    super();
    this.state = {
      currentImg: 0,
      photos: []
    };
  }

  componentWillMount() {
    if (this.props.data.media.photos) {
      let photos = this.props.data.media.photos.photo.filter(
        v => v['@size'] == 'pn'
      );
      this.setState({ photos: photos });
    }
  }

  changePhoto(direction) {
    if (direction == 'left') {
      if (this.state.currentImg === 0) {
        return;
      } else {
        this.setState({ currentImg: this.state.currentImg - 1 });
      }
    } else {
      if (this.state.currentImg === this.state.photos.length - 1) {
        return;
      } else {
        this.setState({ currentImg: this.state.currentImg + 1 });
      }
    }
  }

  render() {
    if (!this.props.data.media.photos) return null;
    return (
      <div className="animal-card">
        <img src={this.state.photos[this.state.currentImg]['$t']} />
        <div className="animal-card-top-content">
          <button>save info</button>
          <p>{this.props.data.name.$t}</p>
          <p>sex: {this.props.data.sex.$t}</p>
          <p>size: {this.props.data.size.$t}</p>
          <p>
            located: {this.props.data.contact.address1.$t},{this.props.data.contact.city.$t},{' '}
            {this.props.data.contact.state.$t}, {this.props.data.contact.zip.$t}{' '}
          </p>
          <p>contact: {this.props.data.contact.phone.$t}</p>
        </div>
        <p className="animal-card-description">
          {this.props.data.description.$t}
        </p>
      </div>
    );
  }
}

export default Animals;
