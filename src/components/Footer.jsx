import React from 'react';
import Container from './common/Container';
import Row from './common/Row';

const Footer = () => {
    return (
        <Container className="bg-black h-[100%] py-[14px]">
            <Row className="text-white justify-between h-full items-center">
                <p><b>2025 copyright</b></p>
                <img 
                className='w-[283px]'
                src="/imgs/cards.png"
                 alt="cards" />
            </Row>
        </Container>
    );
};

export default Footer;