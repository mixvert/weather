import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";

function Capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const Result = (props) => {
  const {
    date,
    dayOfWeek,
    err,
    city,
    desc,
    temp,
    sunrise,
    sunset,
    pressure,
    wind,
    icon,
    rotation,
    humidity,
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000)
      .toLocaleTimeString()
      .replace(/(.*)\D\d+/, "$1");
    const sunsetTime = new Date(sunset * 1000)
      .toLocaleTimeString()
      .replace(/(.*)\D\d+/, "$1");

    content = (
      <React.Fragment>
        <Container fluid className="p-0">
          <Row>
            <Col xs={4} sm={2} className="text-start px-1">
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={`${icon}`}
              />
            </Col>
            <Col xs={8} sm={{ span: 4, order: 3 }}>
              <Row>
                <Col className="d-flex justify-content-start justify-content-sm-end">
                  <h4 className="mb-1">{`${city}`}</h4>
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-start justify-content-sm-end text-muted">
                  {`${dayOfWeek}, `}
                  {`${date}`}
                </Col>
              </Row>
              <Row>
                <Col className="d-flex justify-content-start justify-content-sm-end text-muted">
                  {Capitalize(desc)}
                </Col>
              </Row>
            </Col>
            <Col sm={6} xs={12} className="mt-0">
              <Row>
                <Col xs={4} className="d-flex justify-content-end">
                  <h1>{`${Math.round(temp)}`}&#8451;</h1>
                </Col>
                <Col xs={8}>
                  <Row>
                    <Col xs={12} sm={5}>
                      <Row>
                        <Col className="text-muted">
                          Wschód: {`${sunriseTime}`}
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted">
                          Zachód: {`${sunsetTime}`}
                        </Col>
                      </Row>
                    </Col>
                    <Col xs={12} sm={7}>
                      <Row>
                        <Col className="text-muted">
                          Wilgotność: {`${humidity}`} %
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted">
                          <FontAwesomeIcon
                            className="text-black"
                            icon={faLocationArrow}
                            transform={{ rotate: `${rotation}` - 225 }}
                          ></FontAwesomeIcon>
                          &nbsp; Wiatr: {`${Math.round(wind * 3.6)}`} km/h
                        </Col>
                      </Row>
                      <Row>
                        <Col className="text-muted">
                          <FontAwesomeIcon
                            className="text-black"
                            icon={faGaugeSimpleHigh}
                          ></FontAwesomeIcon>
                          &nbsp; Ciśnienie: {`${pressure}`} hPa
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <div className="">{err ? `Nie znaleziono wyników` : content}</div>
    </React.Fragment>
  );
};

export default Result;

// Ustalić tłumaczenia pogody z angielskiego na polski. Zrobić raczej tłumaczenie w formie tabeli
//https://openweathermap.org/weather-conditions
//Przycisk zamieniający celcjusza na farenhaita i jak się go klika to jego zawartość zamienia się na aktualne jednostki
// Strefy czasowe
