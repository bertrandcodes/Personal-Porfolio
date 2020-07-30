import React, { Fragment } from "react";
import ScrollIndicator from "./ScrollIndicator.jsx";
import Modal from "react-bootstrap/Modal";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet";
import Footer from "./Footer.jsx";

export default function Applications() {
  const [isOpen, setIsOpen] = React.useState(false);

  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const [isOpen2, setIsOpen2] = React.useState(false);

  const showModal2 = () => {
    setIsOpen2(true);
  };

  const hideModal2 = () => {
    setIsOpen2(false);
  };

  return (
    <Fragment>
      <Helmet>
        <title>Applications | Bertrand Shao</title>
        <meta
          name="description"
          content="Check out stuff I made. Many more exciting apps to come."
        ></meta>
      </Helmet>
      <ScrollIndicator />
      <div className="page-body">
        <main className="page-content">
          <div className="card">
            <div className="content">
              <h2 className="title">Adidas Mock-Up</h2>
              <p className="copy">
                A fully-functional clone of an Adidas product page done in
                Redux.
              </p>
              <a href="#FEC">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">System Design</h2>
              <p className="copy">
                Increased a database to hold 10,000,000 records and horizontally
                scaled servers for speed.
              </p>
              <a href="#SDC">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Squad Goals</h2>
              <p className="copy">
                A mobile-first web app that holds you accountable to goals with
                the help of teammates and friends.
              </p>
              <a href="#SQUAD">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
          <div className="card">
            <div className="content">
              <h2 className="title">Hire Mee</h2>
              <p className="copy">
                An app that helps manage all information related to the jobs
                you're applying for.
              </p>
              <a href="#HIRE">
                <button className="btn1">View</button>
              </a>
            </div>
          </div>
        </main>
      </div>
      <div className="marquee-div">
        <marquee>
          &lt;React.js&gt; &lt;Redux&gt; &lt;Node.js&gt; &lt;Express&gt;
          &lt;Firebase&gt; &lt;MongoDB&gt; &lt;PostgreSQL&gt;
        </marquee>
      </div>
      <div className="apps">
        <a name="FEC"></a>
        <div className="app-div">
          <h1 className="app-text">adidas Product Page Mock-Up</h1>
          <div className="line"></div>
          <video className="video" autoPlay={true} loop={true} muted={true}>
            <source src="productadidas.mov" type="video/mp4" />
          </video>
          <div className="tech-bar">
            <center>
              <p className="tech-used">
                React.js | Redux | Express.js | MongoDB
              </p>
            </center>
          </div>
          <div className="app-info">
            <div className="app-bullets">
              <button className="info-button" onClick={showModal}></button>
              <Modal
                show={isOpen}
                onHide={hideModal}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Modal.Title>adidas Product Page Mock-up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>
                      Utilized React along with ​reconciliation logic​ to
                      emulate a fully functioning Adidas product page
                    </li>
                    <li>
                      Deployed proxy server on ​AWS EC2​ instance while adhering
                      to ​service oriented architecture​ principles
                    </li>
                    <li>
                      Dockerized​ web app to ensure consistent runtime
                      environment and cross-platform execution
                    </li>
                    <li>Refactored codebase using Redux</li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <button onClick={hideModal}>Exit</button>
                </Modal.Footer>
              </Modal>

              <p className="github-text">Info</p>
            </div>
            <div className="app-github">
              <a
                href="https://github.com/HRLA35-CS-ADIDAS/Bertrand_Product_View"
                target="_blank"
              >
                <button className="github-button"></button>
              </a>
              <p className="github-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <div className="apps">
        <a name="SDC"></a>
        <div className="app-div">
          <h1 className="app-text">System Design</h1>
          <div className="line"></div>
          <video className="video" autoPlay={true} loop={true} muted={true}>
            <source src="sdc.mp4" type="video/mp4" />
          </video>
          <div className="tech-bar">
            <center>
              <p className="tech-used">PostgreSQL | AWS | NodeJS | NGINX</p>
            </center>
          </div>
          <div className="app-info">
            <div className="app-bullets">
              <button className="info-button" onClick={showModal2}></button>
              <Modal
                show={isOpen2}
                onHide={hideModal2}
                aria-labelledby="contained-modal-title-vcenter"
                size="lg"
                centered
              >
                <Modal.Header>
                  <Modal.Title>System Design</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <ul>
                    <li>
                      Increased data set from 100 to 10,000,000 unique records
                      efficiently using ​draining​ and ​streaming​ techniques
                    </li>
                    <li>
                      Horizontally scaled​ a legacy code base deployed over ​5
                      AWS T2 micro instances​ capable of handling ​2100 requests
                      per second(average latency 67 ms, error rate 0.0%)
                    </li>
                    <li>
                      Implemented Nginx as a ​round-robin/least-conn​​load
                      balancer ​and​ cache​ to further reduce latency by 27%
                    </li>
                  </ul>
                </Modal.Body>
                <Modal.Footer>
                  <NavLink style={{ color: "black" }} to="/blog">
                    <button>Learn More</button>
                  </NavLink>
                  <button onClick={hideModal2}>Exit</button>
                </Modal.Footer>
              </Modal>

              <p className="github-text">Info</p>
            </div>
            <div className="app-github">
              <a
                href="https://github.com/HRLA35-SDC/Bertrand-SDC-Component"
                target="_blank"
              >
                <button className="github-button"></button>
              </a>
              <p className="github-text">GitHub</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}
