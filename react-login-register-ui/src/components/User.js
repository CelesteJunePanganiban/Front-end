import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

const dummyState = [
  {
    state: "Well Rested",
  },
  {
    state: "Tired",
  },
  {
    state: "Not Okay",
  },
];

const wellRestedQuotes = [
  { quotes:"What if dumating ang greatest what f mo, ano gagawin mo. Will you run away? No"},
  { quotes: "kasi minsan kapag tumitingin sa gilid, kakanan ka sa kaliwa" },
  { quotes: "shawarma rising" },
];

const tiredQuotes = [{ quotes: "Pinag sasasabe mo pre" }];

const User = () => {
  const userState = dummyState.at(0).state;
  let quotes = [];
  let imgLink, bgColor = "";
  const streak = 6;

  if (userState === "Well Rested") {
    quotes = wellRestedQuotes;
    imgLink = "https://cdn-icons-png.flaticon.com/512/3408/3408148.png";
    bgColor = "linear-gradient(to right,#12c2e9, #4863d8)";
  } else if (userState === "Tired") {
    quotes =tiredQuotes;
    // imgLink = "https://cdn-icons-png.flaticon.com/512/3782/3782049.png";
    // bgColor = "linear-gradient(to right,#e98512, #d84848)";
  }

  return (
    <div className="userHolder">
      <Container>
        <Row className="mt-3">
          <Col xs={7}>
            <div className="user-state" style = {{background: `${bgColor}`}}>
                <img src={imgLink}/>
                <p>You are: </p>
                <h1>{`${userState}`}</h1>
            </div>
          </Col>

          <Col>
            <div className="user-streak">
            <img src="https://cdn-icons-png.flaticon.com/512/7172/7172786.png"/>
                <h1> {streak} streaks</h1>
                <p>Road to good sleep!</p>    
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <div className="hideImg">
            <Carousel slide={false}>
                {quotes.map((item) => 
                    <Carousel.Item>
                        <img className="d-block w-100" src="" alt={`${quotes[Math.floor(Math.random() * wellRestedQuotes.length)].quotes}`} />
                        <Carousel.Caption>
                        </Carousel.Caption>
                    </Carousel.Item>
                )}
            </Carousel>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default User;
