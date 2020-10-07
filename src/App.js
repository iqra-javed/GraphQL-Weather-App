import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from '@apollo/react-hooks';
import WeatherContainer from './containers/WeatherContainer';

function App() {
  const client = new ApolloClient({
      uri: 'https://graphql-weather-api.herokuapp.com/'
  })

  return (
  <ApolloProvider client={client}>
    <main>
      <WeatherContainer />
    </main>
  </ApolloProvider>
  );
}

export default App;
