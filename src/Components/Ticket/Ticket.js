import React from 'react';
import {  Button, Card } from 'react-bootstrap';

import { Link, useHistory } from 'react-router-dom';
import image from '../../images/Group 33143.png';

   const Ticket = (props) => {
    const { name, price,id } = props.ticket;
    const history = useHistory();
    const handleClick=(ticketId) => {
     const url = `/ticket/${ticketId}`;
     history.push(url);
    }

    return (
        <div className="col-md-3 my-3 pt-5 mt-5">
            <Card className="bg-dark text-white">
                <Card.Img  src={image} alt="Card image" />
                <Card.ImgOverlay>
                    <Card.Title>
                         Ticket Type :  {name} </Card.Title>
                         <Card.Title>
                         Ticket Price:  {price} </Card.Title>
                       
                    <Card.Text>
                        <Button onClick={() =>handleClick(name)} variant="warning">Buy Now</Button>
                    </Card.Text>
                    {/* <Card.Text> <Link to ={`/destination/${name}`}>Show </Link> </Card.Text> */}
                   
                </Card.ImgOverlay>
            </Card>
        </div>
    );
};

export default Ticket;