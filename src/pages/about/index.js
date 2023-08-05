import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  educationList,
  skills,
  languages,
  services,
} from "../../content_option";
import JDing_Resume from "../../assets/pdfs/JDing_Resume.pdf";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="2"></Col>
          <Col lg="8" className="d-flex align-items-center">
            <div>
              {dataabout.aboutme.map((data, i) => {
                return <p> {data} </p>;
              })}
            </div>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Education</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <thead>
                <tr key="Work-col-names">
                  <th scope="col">School</th>
                  <th scope="col">Location</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {educationList.map((data, i) => {
                  return (
                    <React.Fragment key={i}>
                      <tr>
                        <td>{data.school}</td>
                        <td>{data.location}</td>
                        <td>
                          {data.date_start} - {data.date_end}
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className=" sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4"> Experience </h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <thead>
                <tr key="Work-col-names">
                  <th scope="col">Company</th>
                  <th scope="col">Role</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {worktimeline.map((data, i) => {
                  return (
                    <React.Fragment key={i}>
                      <tr className="work-toprow">
                        <td>{data.where}</td>
                        <td>{data.jobtitle}</td>
                        <td>
                          {data.date_start} - {data.date_end}
                        </td>
                      </tr>
                      <tr className="work-desc">
                        <td colSpan="3">
                          <ul style={{ listStyleType: "circle" }}>
                            {data.desc.map((data, i) => {
                              return (
                                <li key={data.jobtitle + "." + i}> {data} </li>
                              );
                            })}
                          </ul>
                        </td>
                      </tr>
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Languages</h3>
          </Col>
          <Col lg="7">
            {languages.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.desc}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((data, i) => {
              return (
                <div key={i}>
                  <h3 className="progress-title">{data.name}</h3>
                  <div className="progress">
                    <div
                      className="progress-bar"
                      style={{
                        width: `${data.value}%`,
                      }}
                    >
                      <div className="progress-value">{data.value}%</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
        </Row>
        <Row className="sec_sp"></Row>
      </Container>
    </HelmetProvider>
  );
};
