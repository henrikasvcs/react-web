import React from "react";
import { Accordion } from "react-bootstrap";

const About = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate
            delectus nesciunt consectetur ex, ullam voluptas placeat recusandae
            nisi tempore nostrum labore? Repellendus, reiciendis quas quaerat
            molestiae provident placeat temporibus libero. Quod accusantium
            dolorem, ex enim cum provident repellat doloremque aperiam iste amet
            dignissimos rerum omnis architecto recusandae officia nesciunt
            voluptatum, ad qui minima reprehenderit culpa dolore commodi?
            Similique, laboriosam officiis. Recusandae autem temporibus
            repellendus consectetur sit quibusdam, pariatur dolore distinctio
            voluptatum quos dolores culpa odio? Neque voluptates unde ea.
            Officia, quo et! Impedit consequatur ex earum incidunt vel error
            voluptatem?
          </p>
        </div>
        <div className="col-md-6">
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Accordion Item #1</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default About;
