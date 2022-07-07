import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

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
  } = props.weather;

  let content = null;

  if (!err && city) {
    const sunriseTime = new Date(sunrise * 1000).toLocaleTimeString().replace(/(.*)\D\d+/, "$1");
    const sunsetTime = new Date(sunset * 1000).toLocaleTimeString().replace(/(.*)\D\d+/, "$1");

    content = (
      <React.Fragment>
        <Container fluid>
          <Row className="">
            <Col xs={6} sm={2}>
              <img
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={`${icon}`}
              />
            </Col>
            <Col sm={(6, { order: 2 })} xs={(12, { order: 3 })}>
              <Row>
                <Col className="d-flex justify-content-end">
                  <h1>{`${Math.round(temp)}`}&#8451;</h1>
                </Col>
                <Col>
                  <Col className="text-muted">Wschód: {`${sunriseTime}`}</Col>
                  <Col className="text-muted">Zachód: {`${sunsetTime}`}</Col>
                  <Col className="text-muted">
                    Wiatr: {`${Math.round(wind)}`} km/h
                  </Col>
                </Col>
              </Row>
            </Col>
            <Col xs={(6, { order: 2 })} sm={(4, { order: 3 })}>
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

// Zrobić wstawienie wszystkich danych w stylu pogody na google, ikonę zależnie od tego jaka ma być i do tego zrobić tłumaczenie opisu pogody. Zrobienie również tak aby to jakoś mobilnie wyglądało między innymi tak aby miasto data i opis pogody były na pod ikoną na  górze. Na moblinym zrobić układ wertyklany 1,3,2
//https://openweathermap.org/weather-conditions
//Przycisk zamieniający celcjusza na farenhaita i jak się go klika to jego zawartość zamienia się na aktualne jednostki
