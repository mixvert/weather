import { render } from "@testing-library/react";
import { React, Component } from "react";
import "./App.css";
import Form from "./Form";
import Result from "./Result";
import Nav from "./Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

const APIKey = "7f1543059f3aa4585aab26b04d954ae4";

class App extends Component {
  state = {
    value: "",
    date: "",
    city: "",
    sunrise: "",
    sunset: "",
    temp: "",
    pressure: "",
    wind: "",
    err: false,
    dayOfWeek: "",
    desc: "",
    icon: "",
    rotation: "",
    humidity: "",
  };

  handleInputChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleCitySubmit = (e) => {
    e.preventDefault();

    const API = `https://api.openweathermap.org/data/2.5/weather?q=${this.state.value}&appid=${APIKey}&units=metric`;

    fetch(API)
      .then((response) => {
        if (response.ok) {
          return response;
        }
        throw Error("Nie udało się");
      })
      .then((response) => response.json())
      .then((data) => {
        const time = new Date().toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
        var days = [
          "Niedziela",
          "Poniedziałek",
          "Wtorek",
          "Środa",
          "Czwartek",
          "Piątek",
          "Sobota",
        ];
        const day = days[new Date().getDay()];
        this.setState({
          err: false,
          date: time,
          dayOfWeek: day,
          city: this.state.value,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
          temp: data.main.temp,
          pressure: data.main.pressure,
          humidity: data.main.humidity,
          wind: data.wind.speed,
          rotation: data.wind.deg,
          desc: data.weather[0].description,
          icon: data.weather[0].icon,
        });
      })
      .catch((err) => {
        console.log(err);
        this.setState((state) => ({
          err: true,
          city: this.state.value,
        }));
      });
  };

  render() {
    return (
      <>
        <Nav />
        <Container fluid>
          <Row className="d-flex justify-content-center">
            <Col
              xs={12}
              sm={8}
              className="pt-5 pb-4 d-flex justify-content-center"
            >
              <Form
                value={this.state.value}
                change={this.handleInputChange}
                submit={this.handleCitySubmit}
              />
            </Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={10} sm={8} className="p-0 border-top"></Col>
          </Row>
          <Row className="d-flex justify-content-center">
            <Col xs={10} sm={8} className="p-0 pt-3">
              <Result weather={this.state} />
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default App;
