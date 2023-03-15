import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const DashboardLayout = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col lg="4">Sidebar</Col>
                    <Col lg="8"><Outlet/></Col>
                </Row>
            </Container>
        </div>
    );
};

export default DashboardLayout;