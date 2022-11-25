import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from "react-bootstrap/ListGroup";
import Carousel from 'react-bootstrap/Carousel'
import Carouseeel from "./Carouseeel";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";

const data = [
    {
        week1: 3,
        week2: 5,
        week3: 6
    },
    {
        week1: 4,
        week2: 5,
        week3: 2
    },
    {
        week1: 8,
        week2: 8,
        week3: 5
    },
    {
        week1: 5,
        week2: 8,
        week3: 3
    },
    {
        week1: 2,
        week2: 2,
        week3: 2
    },
    {
        week1: 2,
        week2: 3,
        week3: 5
    },
    {
        week1: 9,
        week2: 4,
        week3: 6
    }
];

export default class Dashboard extends Component {
    render() {
        const heartRate = 60;
        return (
            <div className="deets ">
                <Container>
                    <Row className="mt-3">
                        <Col style={{ marginLeft: 0 }}>
                            {/*dito ibabalik yung cards*/}
                            <Carouseeel />
                        </Col>
                    </Row>
                    <Row style={{ marginTop: 10 }}>
                        <Col>
                            <Card className="mx-auto" style={{ width: "45rem" }}>
                                <Card.Header>Sleep Activity</Card.Header>
                                <ListGroup variant="flush">
                                    <ListGroup.Item>
                                        <AreaChart
                                            width={700}
                                            height={300}
                                            data={data}
                                            margin={{
                                                top: 10,
                                                right: 30,
                                                left: 0,
                                                bottom: 0,
                                            }}
                                        >
                                            <CartesianGrid strokeDasharray="3 3" />
                                            <XAxis dataKey="name" />
                                            <YAxis />
                                            <Tooltip />
                                            <Area
                                                type="monotone"
                                                dataKey="week1"
                                                stackId="1"
                                                stroke="#8884d8"
                                                fill="#8884d8"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="week2"
                                                stackId="1"
                                                stroke="#82ca9d"
                                                fill="#82ca9d"
                                            />
                                            <Area
                                                type="monotone"
                                                dataKey="week3"
                                                stackId="1"
                                                stroke="#ffc658"
                                                fill="#ffc658"
                                            />
                                        </AreaChart>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>
                        <p>This contains your SPO2, Max Heart Rate, and Average Heart Rate per day :D </p>
                    </Row>
                </Container>
            </div>
        );
    }

}