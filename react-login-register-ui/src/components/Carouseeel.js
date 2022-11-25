import Carousel from 'react-bootstrap/Carousel';
import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';

function Carouseeel() {
  const heartRate = 60;
  return (
    <Container>
      <Carousel variant="dark" className="d-flex align-items-center justify-content-center">
        <Carousel.Item>
          <Row >
            <Col>
              <Card className="mx-auto d-grip me-1" style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>SP02</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto d-grip gap-0 " style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>Ave Heart Rate</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto d-grip gap-0 ms-1" style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>Max Heart Rate</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row >
            <Col>
              <Card className="mx-auto d-grip gap-0 me-1" style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>SP02</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto d-grip gap-0 " style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>Ave Heart Rate</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto d-grip gap-0 ms-1" style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>Max Heart Rate</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

        <Carousel.Item>
          <Row >
            <Col>
              <Card className="mx-auto d-grip gap-0 me-1" style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>SP02</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto d-grip gap-0 " style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>Ave Heart Rate</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className="mx-auto d-grip gap-0 ms-1" style={{ width: '12rem' }}>
                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                <Card.Body>
                  <Card.Title>Max Heart Rate</Card.Title>
                  <Card.Text>
                    Nagpapalpitate ka na
                  </Card.Text>
                  <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Carousel.Item>

      </Carousel>
    </Container>

  );
}

export default Carouseeel;