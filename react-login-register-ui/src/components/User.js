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
  { quotes:"Being consistent assist in maintaining a good sleep schedule. Going to bed at the same time each night would help."},
  { quotes: "Being well-rested lowers your risk for serious health problems, like diabetes and heart disease" },
  { quotes: "Getting enough sleep reduces stress and improves your mood" },
];

const tiredQuotes = [
  { quotes: "Before sleeping, make sure your bedroom is quiet, dark, relaxing, and at a comfortable temperature"},
    {quotes: "Get some exercise. Being physically active during the day can help you fall asleep more easily at night."},
    {quotes: "Create a comfortable sleep environment — make sure your bedroom is dark and quiet"},
    {quotes: "Lack of quality sleep are associated with high-blood pressure and heart related problems like heart attacks and strokes"},
    {quotes: "Sleep disorders can cause many different problems. Keep in mind that it’s normal to have trouble sleeping every now and then. If you are consistently having troubles, you can consult your doctor"}
];

const User = () => {
  const userState = dummyState.at(0).state;
  let quotes = [];
  let imgState, bgState, imgStreak, txtStreak, bgStreak = "";
  const streak = 8;

  if (userState === "Well Rested") {
    quotes = wellRestedQuotes;
    imgState = "https://cdn-icons-png.flaticon.com/512/3408/3408148.png";
    bgState = "linear-gradient(to right,#12c2e9, #4863d8)";
  } else if (userState === "Tired") {
    quotes =tiredQuotes;
    imgState = "https://cdn-icons-png.flaticon.com/512/3782/3782049.png";
    bgState = "linear-gradient(to right,#e98512, #d84848)";
  } else if (userState === "Exhausted"){
    quotes = tiredQuotes;
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
