import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ListGroup from "react-bootstrap/ListGroup";
import LeaderboardItem from "./LeaderboardItem";

const leaders = [
    {
        name: "Tristan",
        streak: 35
    },
    {
        name: "Divine",
        streak: 34
    },
    {
        name: "Aldrin",
        streak: 31
    },
    {
        name: "Carl",
        streak: 25
    },
    {
        name: "Zedric",
        streak: 24
    },
    {
        name: "Jafet",
        streak: 23
    },
    {
        name: "Donna",
        streak: 12
    },
    {
        name: "CJ",
        streak: 9
    },
    {
        name: "Naruto",
        streak: 5
    },
    {
        name: "Jhemerlhyn",
        streak: 4
    },

]

const Leaderboard = () => {
    return (
        <div class="inner" >
            <Container>
                <Row className="mt-3">
                    <Col>
                        <div>
                            <h2>Leaderboard</h2>
                            <h3>You are at: 5th place</h3>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col>
                        <div>
                            <ListGroup as="ol" numbered>
                                {leaders.map((item) => <LeaderboardItem leader={item} />)}
                            </ListGroup>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Leaderboard;