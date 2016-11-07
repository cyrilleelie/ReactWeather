var React = require('react');

var WeatherMessage = ({temp, city}) => {
  return (
      <h3>It's {temp} in {city}</h3>
  );
};

module.exports = WeatherMessage;
