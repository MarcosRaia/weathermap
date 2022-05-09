import axios from "axios";
import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function Api() {
    const API_KEY = 'cfdfe476c3a06d430319b03aa2ed79bb'
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            axios.get(url).then((response) => {
                setData(response.data)
                console.log(response.data)
            })
            setLocation('')
        }

    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${API_KEY}`
    return <>
        
        <div className="container">
            <h1 className="p-5 d-flex justify-content-center">Previsão do Tempo</h1>
            <div className=" p-5 d-flex justify-content-center">
                <i className="material-icons">search</i><input style={{ width: '35%', height: '40px' }} value={location} onChange= {event => setLocation(event.target.value)} onKeyPress= {searchLocation} placeholder='Cidade' type='text' />
            </div>
        </div>
        <Container style={{ width: '40%' }}>
            <Row>
                <hr></hr>
                <h1>Capitais</h1>
                
                <Col xs={6} className="d-flex">
                    <Col xs={4}>
                        <p>min</p>
                         {data.main ? <p> {data.main.temp_min} </p> : null} 
                    </Col>
                    <Col xs={4}>
                        <p>max</p>
                        {data.main ? <p> {data.main.temp_max} </p> : null}
                    </Col>
                    <Col xs={4}>
                        <p>cidade</p>
                        <p>{data.name}</p>
                    </Col>
                </Col>
                <Col xs={6} className="d-flex">
                    <Col xs={4}>
                        <p>min</p>
                        {data.main ? <p> {data.main.temp_min} </p> : null}
                    </Col>
                    <Col xs={4}>
                        <p>max</p>
                        {data.main ? <p> {data.main.temp_max} </p> : null} 
                    </Col>
                    <Col xs={4}>
                        <p>cidade</p>
                        <p> {data.name} </p>
                    </Col>
                </Col>
            </Row>
        </Container>
    </>
}
export default Api;