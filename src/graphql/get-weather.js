import gql from 'graphql-tag';

export const GET_WEATHER = gql`
  query GetWeather($name: String!) {
    getCityByName(name: $name, config: { units: imperial }) {
      name
      weather {
        temperature {
          actual
          feelsLike
          min
          max
        }
      }
    }
  }
`;
