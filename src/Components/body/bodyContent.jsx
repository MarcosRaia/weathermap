import React, { useState, useEffect } from "react";
import { buscarTemp } from "../../API/temperatura";
import { Row, Col, Container } from "react-bootstrap";
function Body() {
    const API_KEY = "cfdfe476c3a06d430319b03aa2ed79bb"

    useEffect(async () => {
        await buscarTemp(API_KEY)
            .then(res => res.data)
    }, [])
    return <>
        <Container style={{ width: '30%' }}>
            <Row>
                <hr></hr>
                <h1>Capitais</h1>
                <Col xs={6} className="d-flex">
                    <Col xs={4}>
                        <p>min</p>
                    </Col>
                    <Col xs={4}>
                        <p>max</p>
                    </Col>
                    <Col xs={4}>

                    </Col>
                </Col>
                <Col xs={6} className="d-flex">
                    <Col xs={4}>
                        <p>min</p>
                    </Col>
                    <Col xs={4}>
                        <p>max</p>
                    </Col>
                    <Col xs={4}>

                    </Col>
                </Col>
            </Row>
        </Container>
    </>
}

export default Body;