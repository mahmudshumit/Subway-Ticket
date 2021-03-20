import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

import Ticket from '../Ticket/Ticket';
import ticketData from '../fakeData/data';


const TicketDetail = () => {

  
  const { ticketId } = useParams();


  const ticket = ticketData.find(ticket => ticket.id == ticketId);
  return (

    <div>

      <h1>Ticket Type : {ticketId}</h1>
      <Ticket showButton={false} ticket={ticket}></Ticket>

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Pick From</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Destination" />

        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Pick To</Form.Label>
          <Form.Control type="name" placeholder="Enter Your Destination" />
        </Form.Group>

        <Button  variant="primary" type="submit">
          Search
  </Button>
      </Form>
    </div>


  );
};

export default TicketDetail;