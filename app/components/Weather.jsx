var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getDefaultProps: function() {
    return {
      title: 'Get Weather'
    };
  },
  getInitialState: function() {
    return {
      isLoading: false
    };
  },
  handleSearch: function (city) {
    var that = this;

    this.setState({isLoading: true});

    openWeatherMap.getTemp(city).then(function (temp) {
      that.setState({
        city: city,
        temp: temp,
        isLoading: false
      });
    }, function (errorMessage) {
      that.setState({
        isLoading: false
      })
      alert(errorMessage);
    })
    // this.setState({
    //   city: city,
    //   temp: 23
    // });
  },
  render: function () {
    var title = this.props.title;
    var {isLoading, temp, city} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && city) {
        return <WeatherMessage city={city} temp={temp}/>;
      }
    }

    return (
      <div>
        <h1 className="text-center">{title}</h1>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
