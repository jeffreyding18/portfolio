import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import { useState } from "react";

export const Portfolio = () => {
  const [rowNum, setRowNum] = useState(0);

  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <p style={{fontSize: '18px', fontStyle: 'italic'}}> My projects are still in the works. Please check back later! </p>
      </Container>
    </HelmetProvider>
  );
};

/*
<div className="mb-5 po_items_ho">
          {dataportfolio.map((data, i) => {
            return (
              <div key={i} className="po_item">
                <img src={data.img} alt="" />
                <div className="content">
                  <p>{data.description}</p>
                  <a href={data.link}>view project</a>
                </div>
              </div>
            );
          })}
        </div>

{dataportfolio.map((data, i) => {
          if (i % 2 == 0) {
            return (
              <div className="mb-5 portfolio-entry" key={i}>
                <Row>
                  <Col md={4}>
                    <div className="portfolio-img">
                      <img src={data.img} alt="" className="fit-image" />
                    </div>
                  </Col>
                  <Col md={8}>
                    <div className="portfolio-info">
                      <p> {data.description} </p>
                    </div>
                  </Col>
                </Row>
              </div>
            );
          } else {
            return (
              <div className="mb-5 portfolio-entry" key={i}>
                <Row>
                  <Col md={8}>
                    <div className="portfolio-info">
                      <p> {data.description} </p>
                    </div>
                  </Col>
                  <Col md={4}>
                    <div className="portfolio-img">
                      <img src={data.img} alt="" className="fit-image" />
                    </div>
                  </Col>
                </Row>
              </div>
            );
          }
        })}
*/
