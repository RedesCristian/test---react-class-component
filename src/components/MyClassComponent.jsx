import React, { Component } from 'react';
import axios from 'axios';

export default class MyClassComponent extends Component {
  state = {
    data: null,
    loading: true,
    error: null,
  };

  componentDidMount() {
    const API_Key = 'LNDPNUAN3ZUQHZZVNY3T68UBZ'; // Înlocuiește cu cheia ta API
    const city = 'Arad,RO';
    const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?key=${API_Key}`;

    axios
      .get(url)
      .then(response => {
        console.log(response.data); // Verifică structura datelor în consolă
        this.setState({ data: response.data, loading: false });
      })
      .catch(error => {
        console.error(error); // Afișează eroarea în consolă
        this.setState({ error: error.message, loading: false });
      });
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
      <div>
        <h1>Weather Data</h1>
        {data && (
          <div>
            <p>City: {data.address}</p>
            {/* Verifică dacă days există și are elemente */}
            {data.days && data.days.length > 0 && (
              <div>
                <p>Temperature: {data.days[0].temp}</p>
                <p>Weather: {data.days[0].conditions}</p>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}
