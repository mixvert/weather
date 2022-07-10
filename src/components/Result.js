import React, {useState} from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationArrow,
  faGaugeSimpleHigh,
} from "@fortawesome/free-solid-svg-icons";

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
                  {desc === 'overcast clouds' ? "Zachmurzenie całkowite" : null}
                  {desc === 'broken clouds' ? "Pochmurnie" : null}
                  {desc === 'scattered clouds' ? "Zachmurzenie umiarkowane" : null}
                  {desc === 'few clouds' ? "Prawie bezchmurnie" : null}
                  {desc === 'clear sky' ? "Bezchmurnie" : null}
                  {desc === 'tornado' ? "Tornado" : null}
                  {desc === 'squalls' ? "Szkwał" : null}
                  {desc === 'volcanic ash' ? "Pył wulkaniczny" : null}
                  {desc === 'dust' ? "Pył" : null}
                  {desc === 'sand' ? "Piasek" : null}
                  {desc === 'fog' ? "Mgła" : null}
                  {desc === 'sand/ dust whirls' ? "Burza piaskowa" : null}
                  {desc === 'Haze' ? "Mgła" : null}
                  {desc === 'Smoke' ? "Dym" : null}
                  {desc === 'mist' ? "Mgła" : null}
                  {desc === 'light snow' ? "Lekkie opady śniegu" : null}
                  {desc === 'snow' ? "Opady śniegu" : null}
                  {desc === 'Heavy snow' ? "Duże opady śniegu" : null}
                  {desc === 'Sleet' ? "Śnieg z deszczem" : null}
                  {desc === 'Light shower sleet' ? "Lekki deszcz ze śniegiem" : null}
                  {desc === 'Shower sleet' ? "Deszcz ze śniegiem" : null}
                  {desc === 'Light rain and snow' ? "Lekki deszcz i śnieg" : null}
                  {desc === 'Rain and snow' ? "Deszcz i śnieg" : null}
                  {desc === 'Light shower snow' ? "Lekki deszczowy śnieg" : null}
                  {desc === 'Shower snow' ? "Deszczowy śnieg" : null}
                  {desc === 'Heavy shower snow' ? "Mocny deszczowy śnieg" : null}
                  {desc === 'light rain' ? "Lekki deszcz" : null}
                  {desc === 'moderate rain' ? "Umiarkowany deszcz" : null}
                  {desc === 'heavy intensity rain' ? "Intensywny deszcz" : null}
                  {desc === 'very heavy rain' ? "Bardzo ulewny deszcz" : null}
                  {desc === 'extreme rain' ? "Ekstremalny deszcz" : null}
                  {desc === 'freezing rain' ? "Marznący deszcz" : null}
                  {desc === 'light intensity shower rain' ? "Lekki przelotny deszcz" : null}
                  {desc === 'shower rain' ? "Przelotny deszcz" : null}
                  {desc === 'heavy intensity shower rain' ? "Intensywny przelotny deszcz" : null}
                  {desc === 'ragged shower rain' ? "Postrzępiony intensywny deszcz" : null}
                  {desc === 'light intensity drizzle' ? "Lekka mżawka" : null}
                  {desc === 'drizzle' ? "Mżawka" : null}
                  {desc === 'heavy intensity drizzle' ? "Intensywna mżawka" : null}
                  {desc === 'light intensity drizzle rain' ? "Lekka mżawka" : null}
                  {desc === 'drizzle rain' ? "Mżawka" : null}
                  {desc === 'heavy intensity drizzle rain' ? "Intensywna mżawka" : null}
                  {desc === 'shower rain and drizzle' ? "Przelotny desz i mżawka" : null}
                  {desc === 'heavy shower rain and drizzle' ? "Intensywny przelotyn deszcz i mżawka" : null}
                  {desc === 'shower drizzle' ? "Przelotna mżawka" : null}
                  {desc === 'thunderstorm with light rain' ? "Burza z lekkim deszczem" : null}
                  {desc === 'thunderstorm with rain' ? "Burza z deszczem" : null}
                  {desc === 'thunderstorm with heavy rain' ? "Burza z intensywnym deszczem" : null}
                  {desc === 'light thunderstorm' ? "Lekka burza" : null}
                  {desc === 'thunderstorm' ? "Burza" : null}
                  {desc === 'heavy thunderstorm' ? "Intensywna burza" : null}
                  {desc === 'ragged thunderstorm' ? "Postrzępiona burza" : null}
                  {desc === 'thunderstorm with light drizzle' ? "Burza z lekką mżawką" : null}
                  {desc === 'thunderstorm with drizzle' ? "Burza z mżawką" : null}
                  {desc === 'thunderstorm with heavy drizzle' ? "Buża z intensywną mżawką" : null}
                </Col>
              </Row>
            </Col>
            <Col sm={6} xs={12} className="mt-0">
              <Row>
                <Col xs={4} className="d-flex justify-content-end">
                  <span className="temp--size">{`${Math.round(temp)}`}°C</span>
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
      <div>{err ? <span className="d-flex justify-content-center">Nie znaleziono wyników</span> : content}</div>
    </React.Fragment>
  );
};

export default Result;

