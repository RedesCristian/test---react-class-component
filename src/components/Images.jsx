import React, { Component } from 'react';
import axios from 'axios';

export default class Images extends Component {
  state = {
    photos: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    const apiKey = 'uqw2lNasUSFWrJPDJZQ1YFA71vg7aEC-lh6R2S7xAZw';
    const url = `https://api.unsplash.com/photos/?client_id=${apiKey}`;

    axios
      .get(url)
      .then(response => {
        console.log(response.data);
        this.setState({ photos: response.data, loading: false });
      })
      .catch(error => {
        console.error('Error fetching photos:', error);
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { photos, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1>Unsplash Images</h1>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {photos.map(photo => (
            <div key={photo.id} style={{ margin: '10px' }}>
              <img
                src={photo.urls.small}
                alt=""
                style={{ width: '150px', height: '150px' }}
              />
              <p>{photo.description}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
