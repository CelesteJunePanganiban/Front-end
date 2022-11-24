import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import ListGroup from "react-bootstrap/ListGroup";
import { gql, useQuery } from "@apollo/client";

import {
    AreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip
} from "recharts";




const PROFILE_QUERY = gql`
query SleepLogs($userId: ID!) {
  sleepLogs(userId: $userId) {
    dateOfSleep
  }
}
`

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

export default function Dashboard () {

        const heartRate = 60;

        const { clients, loading, data } = useQuery(            
                PROFILE_QUERY, {
                    variables: { userId : 1 }
                }
              );
              if (loading) {
                return <div>Loading</div>
              }
              console.log(data)
        return (
            <div class="align-center mt-3" >
                <Container className="mt-6">
                    <Row className="mt-3">
                        <Col>
                            <div>
                                <h3>You are:</h3>
                                <h2>
                                    Well Rested
                                </h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className="mt-3">
                        <Col style={{ marginLeft: 25 }}>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                                <Card.Body>
                                    <Card.Title>SP02</Card.Title>
                                    <Card.Text>
                                        Nagpapalpitate ka na
                                    </Card.Text>
                                    <ProgressBar now={heartRate} label={`${heartRate}%`} variant="danger" />
                                </Card.Body>
                            </Card>
                            {/* <Card style={{ alignContent: "center" }}>
                                <Card.Body className="justify-content-center">
                                    <Card.Title>SP02:</Card.Title>
                                    <Card.Text style={{ fontSize: 50, fontWeight: "bold", textAlign: "center" }}>
                                        SP02
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                                <Card.Body>
                                    <Card.Title>Average Heart Rate</Card.Title>
                                    <Card.Text>
                                        Nagpapalpitate ka na
                                    </Card.Text>
                                    <ProgressBar now={heartRate} label={`${heartRate}%`} variant="success" />
                                </Card.Body>
                            </Card>
                            {/* <Card style={{ alignContent: "center" }}>
                                <Card.Body className="justify-content-center">
                                    <Card.Title>Average Heart rate:</Card.Title>
                                    <Card.Text style={{ fontSize: 50, fontWeight: "bold", textAlign: "center" }}>
                                        heartrate
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                        </Col>
                        <Col>
                            <Card style={{ width: '14rem' }}>
                                <Card.Img variant="top" src="https://healthblog.uofmhealth.org/sites/consumer/files/2020-01/heart_beating_0.gif" />
                                <Card.Body>
                                    <Card.Title>Max Heart Rate</Card.Title>
                                    <Card.Text>
                                        Nagpapalpitate ka na
                                    </Card.Text>
                                    <ProgressBar now={heartRate} label={`${heartRate}%`} />
                                </Card.Body>
                            </Card>
                            {/* <Card style={{ alignContent: "center" }}>
                                <Card.Body className="justify-content-center">
                                    <Card.Title>Maximum Heart Rate:</Card.Title>
                                    <Card.Text style={{ fontSize: 50, fontWeight: "bold", textAlign: "center" }}>
                                        time
                                    </Card.Text>
                                </Card.Body>
                            </Card> */}
                        </Col>
                    </Row>
                    <Row style={{ marginLeft: 55, marginTop: 20 }}>
                        <Card style={{ width: "45rem" }}>
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
                    </Row>
                </Container>
            </div>

        );

}