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
    state: "Exhausted",
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
  let imgState, bgState, imgStreak, txtStreak, bgStreak = "";
  const streak = 7;

  if (userState === "Well Rested") {
    quotes = wellRestedQuotes;
    imgState = "https://cdn-icons-png.flaticon.com/512/3408/3408148.png";
    bgState = "linear-gradient(to right,#12c2e9, #4863d8)";
  } else if (userState === "Tired") {
    quotes =tiredQuotes;
    imgState = "https://cdn-icons-png.flaticon.com/512/3782/3782049.png";
    bgState = "linear-gradient(to right,#e98512, #d84848)";
  } else if (userState === "Exhausted"){
    quotes = wellRestedQuotes;
    imgState = "https://cdn-icons-png.flaticon.com/512/2766/2766109.png";
    bgState = "linear-gradient(to right,#46504c, #838f8a)";
  }

  if (streak === 0) {
    imgStreak = "https://cdn-icons-png.flaticon.com/512/2829/2829069.png";
    bgStreak = "#ffffff";
    txtStreak = "You need to rest <3"
  } else if(streak>0&&streak<=3){
    imgStreak = "https://cdn-icons-png.flaticon.com/512/3025/3025528.png";
    bgStreak = "#ffebc5";
    txtStreak = "Road to good sleep >:D"
  } else {
    imgStreak = "https://cdn-icons-png.flaticon.com/512/5485/5485593.png";
    bgStreak = "#ffccb0";
    txtStreak = "Good Job!! Deserve"
  }

  return (
    <div className="userHolder">
      <Container>
        <Row className="mt-3">
          <Col xs={7}>
            <div className="user-state" style = {{background: `${bgState}`}}>
                <img src={imgState}/>
                <p>You are: </p>
                <h1>{`${userState}`}</h1>
            </div>
          </Col>

          <Col>
            <div className="user-streak" style = {{background: `${bgStreak}`}}>
            <img src={imgStreak}/>
                <h1> {streak} streaks</h1>
                <p>{`${txtStreak}`}</p>    
            </div>
          </Col>
        </Row>

        <Row className="mt-3">
          <div className="hideImg">
            <Carousel slide={false}>
                {quotes.map((item) => 
                    <Carousel.Item>
                        <img className="d-block w-100" src="" alt={`${quotes[Math.floor(Math.random()*quotes.length)].quotes}`} />
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
